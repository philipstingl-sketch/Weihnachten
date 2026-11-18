const STATE_KEY = 'album/state-v1.json';
const PHOTO_PREFIX = 'album/photos/';

export const emptyAlbumState = () => ({
  version: 1,
  initialized: true,
  dateOverrides: {},
  deletedPhotos: {},
  deletedUploadedPhotoIds: [],
  locationOverrides: {},
  mapHiddenPlaces: {},
  mapHiddenPhotoKeys: {},
  bucketItems: [],
  bucketDeletedIds: [],
  unlockedLetters: [],
  dailyCouponState: null,
  uploadedPhotos: [],
  updatedAt: new Date().toISOString()
});

export function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'private, no-store, max-age=0',
      'X-Content-Type-Options': 'nosniff',
      ...extraHeaders
    }
  });
}

export function storageUnavailable() {
  return jsonResponse({ error: 'Der gemeinsame Album-Speicher ist noch nicht verbunden.' }, 503);
}

export function getBucket(context) {
  return context.env?.ALBUM_STORAGE || null;
}

export async function readAlbumState(bucket) {
  const object = await bucket.get(STATE_KEY);
  if (!object) return { state: emptyAlbumState(), exists: false };
  try {
    const parsed = await object.json();
    const stored = isRecord(parsed) ? parsed : {};
    return {
      state: {
        ...emptyAlbumState(),
        ...stored,
        dateOverrides: isRecord(stored.dateOverrides) ? stored.dateOverrides : {},
        deletedPhotos: isRecord(stored.deletedPhotos) ? stored.deletedPhotos : {},
        deletedUploadedPhotoIds: Array.isArray(stored.deletedUploadedPhotoIds) ? stored.deletedUploadedPhotoIds : [],
        locationOverrides: isRecord(stored.locationOverrides) ? stored.locationOverrides : {},
        mapHiddenPlaces: isRecord(stored.mapHiddenPlaces) ? stored.mapHiddenPlaces : {},
        mapHiddenPhotoKeys: isRecord(stored.mapHiddenPhotoKeys) ? stored.mapHiddenPhotoKeys : {},
        bucketItems: Array.isArray(stored.bucketItems) ? stored.bucketItems : [],
        bucketDeletedIds: Array.isArray(stored.bucketDeletedIds) ? stored.bucketDeletedIds : [],
        unlockedLetters: Array.isArray(stored.unlockedLetters) ? stored.unlockedLetters.filter((id) => typeof id === 'string') : [],
        dailyCouponState: isRecord(stored.dailyCouponState) ? stored.dailyCouponState : null,
        uploadedPhotos: Array.isArray(stored.uploadedPhotos) ? stored.uploadedPhotos : []
      },
      exists: true
    };
  } catch (_) {
    return { state: emptyAlbumState(), exists: false };
  }
}

export async function writeAlbumState(bucket, state) {
  state.updatedAt = new Date().toISOString();
  await bucket.put(STATE_KEY, JSON.stringify(state), {
    httpMetadata: { contentType: 'application/json; charset=utf-8' }
  });
}

export function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function requestIsSameOrigin(request) {
  const origin = request.headers.get('Origin');
  if (!origin) return true;
  try { return new URL(origin).host === new URL(request.url).host; }
  catch (_) { return false; }
}

export function photoObjectKey(id) {
  return `${PHOTO_PREFIX}${id}`;
}

