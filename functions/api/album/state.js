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

