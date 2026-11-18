import { emptyAlbumState, getBucket, isRecord, jsonResponse, readAlbumState, requestIsSameOrigin, storageUnavailable, writeAlbumState } from './_shared.js';

export async function onRequestGet(context) {
  const bucket = getBucket(context);
  if (!bucket) return storageUnavailable();
  const { state, exists } = await readAlbumState(bucket);
  return jsonResponse({ ...state, exists });
}

export async function onRequestPut(context) {
  const bucket = getBucket(context);
  if (!bucket) return storageUnavailable();
  if (!requestIsSameOrigin(context.request)) return jsonResponse({ error: 'Ungültige Anfrage.' }, 403);

  let incoming;
  try { incoming = await context.request.json(); }
  catch (_) { return jsonResponse({ error: 'Ungültige Albumdaten.' }, 400); }
  if (!isRecord(incoming) || JSON.stringify(incoming).length > 1_000_000) {
    return jsonResponse({ error: 'Die Albumdaten sind ungültig oder zu groß.' }, 413);
  }

  const { state } = await readAlbumState(bucket);
  state.dateOverrides = { ...state.dateOverrides, ...(isRecord(incoming.dateOverrides) ? incoming.dateOverrides : {}) };
  state.deletedPhotos = { ...state.deletedPhotos, ...(isRecord(incoming.deletedPhotos) ? incoming.deletedPhotos : {}) };
  state.locationOverrides = { ...state.locationOverrides, ...(isRecord(incoming.locationOverrides) ? incoming.locationOverrides : {}) };
  state.mapHiddenPlaces = { ...state.mapHiddenPlaces, ...(isRecord(incoming.mapHiddenPlaces) ? incoming.mapHiddenPlaces : {}) };
  state.mapHiddenPhotoKeys = { ...state.mapHiddenPhotoKeys, ...(isRecord(incoming.mapHiddenPhotoKeys) ? incoming.mapHiddenPhotoKeys : {}) };
  state.bucketDeletedIds = Array.from(new Set([...state.bucketDeletedIds, ...(Array.isArray(incoming.bucketDeletedIds) ? incoming.bucketDeletedIds.filter((id) => typeof id === 'string') : [])]));
  const bucketItemsById = new Map(state.bucketItems.map((item) => [item.id, item]));
  if (Array.isArray(incoming.bucketItems)) {
    for (const item of incoming.bucketItems) {
      if (!item || typeof item.id !== 'string' || typeof item.text !== 'string') continue;
      const current = bucketItemsById.get(item.id);
      const itemTime = Date.parse(item.updatedAt || item.createdAt || '') || 0;
      const currentTime = Date.parse(current?.updatedAt || current?.createdAt || '') || 0;
      if (!current || itemTime >= currentTime) bucketItemsById.set(item.id, item);
    }
  }
  state.bucketItems = Array.from(bucketItemsById.values()).filter((item) => !state.bucketDeletedIds.includes(item.id));

  state.unlockedLetters = Array.from(new Set([
    ...state.unlockedLetters,
    ...(Array.isArray(incoming.unlockedLetters) ? incoming.unlockedLetters.filter((id) => typeof id === 'string' && id.length <= 120) : [])
  ])).slice(-200);
  if (incoming.dailyCouponState && typeof incoming.dailyCouponState.day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(incoming.dailyCouponState.day)) {
    const incomingCoupons = incoming.dailyCouponState;
    const currentCoupons = state.dailyCouponState;
    const cleanList = (value) => Array.isArray(value) ? Array.from(new Set(value.filter((id) => typeof id === 'string' && id.length <= 120))).slice(0, 100) : [];
    if (!currentCoupons || incomingCoupons.day > currentCoupons.day) {
      state.dailyCouponState = {
        day: incomingCoupons.day,
        ids: cleanList(incomingCoupons.ids),
        revealed: cleanList(incomingCoupons.revealed),
        redeemed: cleanList(incomingCoupons.redeemed)
      };
    } else if (incomingCoupons.day === currentCoupons.day) {
      const ids = cleanList(currentCoupons.ids).length ? cleanList(currentCoupons.ids) : cleanList(incomingCoupons.ids);
      state.dailyCouponState = {
        day: currentCoupons.day,
        ids,
        revealed: Array.from(new Set([...cleanList(currentCoupons.revealed), ...cleanList(incomingCoupons.revealed)])).filter((id) => ids.includes(id)),
        redeemed: Array.from(new Set([...cleanList(currentCoupons.redeemed), ...cleanList(incomingCoupons.redeemed)])).filter((id) => ids.includes(id))
      };
    }
  }

  const deletedIds = new Set([
    ...state.deletedUploadedPhotoIds,
    ...(Array.isArray(incoming.deletedUploadedPhotoIds) ? incoming.deletedUploadedPhotoIds.filter((id) => typeof id === 'string') : [])
  ]);
  state.deletedUploadedPhotoIds = Array.from(deletedIds).slice(-5000);
  for (const id of deletedIds) {
    if (/^[\w-]{1,100}$/.test(id)) await bucket.delete(`album/photos/${id}`);
  }

  const byId = new Map(state.uploadedPhotos.map((photo) => [photo.id, photo]));
  if (Array.isArray(incoming.uploadedPhotos)) {
    for (const photo of incoming.uploadedPhotos) {
      if (photo && typeof photo.id === 'string' && /^[\w-]{1,100}$/.test(photo.id) && !deletedIds.has(photo.id)) {
        byId.set(photo.id, { ...byId.get(photo.id), ...photo, id: photo.id });
      }
    }
  }
  state.uploadedPhotos = Array.from(byId.values()).filter((photo) => !deletedIds.has(photo.id));
  state.initialized = true;
  await writeAlbumState(bucket, state);
  return jsonResponse({ ok: true, updatedAt: state.updatedAt });
}

