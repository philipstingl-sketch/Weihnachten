import { getBucket, jsonResponse, photoObjectKey, readAlbumState, requestIsSameOrigin, storageUnavailable, writeAlbumState } from './_shared.js';

const MAX_PHOTO_BYTES = 20 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/heic', 'image/heif', 'image/gif']);

export async function onRequestPost(context) {
  const bucket = getBucket(context);
  if (!bucket) return storageUnavailable();
  if (!requestIsSameOrigin(context.request)) return jsonResponse({ error: 'Ungültige Anfrage.' }, 403);

  let form;
  try { form = await context.request.formData(); }
  catch (_) { return jsonResponse({ error: 'Das Foto konnte nicht gelesen werden.' }, 400); }
  const file = form.get('file');
  const id = String(form.get('id') || '');
  if (!(file instanceof File) || !/^[\w-]{1,100}$/.test(id)) return jsonResponse({ error: 'Foto oder Kennung fehlt.' }, 400);
  if (file.size < 1 || file.size > MAX_PHOTO_BYTES) return jsonResponse({ error: 'Ein Foto darf höchstens 20 MB groß sein.' }, 413);
  const type = (file.type || 'application/octet-stream').toLowerCase();
  if (!ALLOWED_TYPES.has(type)) return jsonResponse({ error: 'Dieses Bildformat wird nicht unterstützt.' }, 415);

  const metadata = {
    id,
    caption: 'Ein Moment für uns',
    capturedAt: String(form.get('capturedAt') || '').slice(0, 40),
    locationName: String(form.get('locationName') || '').slice(0, 160),
    latitude: parseCoordinate(form.get('latitude'), -90, 90),
    longitude: parseCoordinate(form.get('longitude'), -180, 180),
    addedAt: String(form.get('addedAt') || new Date().toISOString()).slice(0, 40),
    fileName: String(form.get('fileName') || 'erinnerungsfoto').replace(/[\r\n"\\/]/g, '_').slice(0, 180),
    contentType: type,
    size: file.size
  };

  await bucket.put(photoObjectKey(id), file.stream(), {
    httpMetadata: { contentType: type, cacheControl: 'private, no-store' },
    customMetadata: { fileName: metadata.fileName }
  });

  const { state } = await readAlbumState(bucket);
  state.deletedUploadedPhotoIds = state.deletedUploadedPhotoIds.filter((deletedId) => deletedId !== id);
  const byId = new Map(state.uploadedPhotos.map((photo) => [photo.id, photo]));
  byId.set(id, metadata);
  state.uploadedPhotos = Array.from(byId.values());
  state.initialized = true;
  await writeAlbumState(bucket, state);
  return jsonResponse({ ok: true, photo: metadata });
}

function parseCoordinate(value, minimum, maximum) {
  if (value === null || value === undefined || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) && number >= minimum && number <= maximum ? number : null;
}

