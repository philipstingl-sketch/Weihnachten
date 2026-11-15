import { getBucket, jsonResponse, photoObjectKey, readAlbumState, requestIsSameOrigin, storageUnavailable, writeAlbumState } from '../_shared.js';

export async function onRequestGet(context) {
  const bucket = getBucket(context);
  if (!bucket) return storageUnavailable();
  const id = context.params.id;
  if (typeof id !== 'string' || !/^[\w-]{1,100}$/.test(id)) return new Response('Not found', { status: 404 });
  const object = await bucket.get(photoObjectKey(id));
  if (!object) return new Response('Not found', { status: 404 });
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('Cache-Control', 'private, no-store, max-age=0');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Content-Disposition', 'inline');
  return new Response(object.body, { headers });
}

export async function onRequestDelete(context) {
  const bucket = getBucket(context);
  if (!bucket) return storageUnavailable();
  if (!requestIsSameOrigin(context.request)) return jsonResponse({ error: 'Ungültige Anfrage.' }, 403);
  const id = context.params.id;
  if (typeof id !== 'string' || !/^[\w-]{1,100}$/.test(id)) return jsonResponse({ error: 'Ungültige Foto-Kennung.' }, 400);
  await bucket.delete(photoObjectKey(id));
  const { state } = await readAlbumState(bucket);
  state.uploadedPhotos = state.uploadedPhotos.filter((photo) => photo.id !== id);
  state.deletedUploadedPhotoIds = Array.from(new Set([...state.deletedUploadedPhotoIds, id])).slice(-5000);
  await writeAlbumState(bucket, state);
  return jsonResponse({ ok: true });
}

