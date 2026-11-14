const SESSION_COOKIE = '__Host-fuer-dich-session';
const SESSION_SECONDS = 60 * 60 * 24;
const encoder = new TextEncoder();

function bytesToBase64Url(bytes) {
  let binary = '';
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function constantTimeEqual(left, right) {
  const maxLength = Math.max(left.length, right.length);
  let difference = left.length ^ right.length;
  for (let index = 0; index < maxLength; index += 1) {
    difference |= (left.charCodeAt(index) || 0) ^ (right.charCodeAt(index) || 0);
  }
  return difference === 0;
}

async function passwordMatches(candidate, expected) {
  if (!candidate || candidate.length > 256 || !expected) return false;
  const [candidateDigest, expectedDigest] = await Promise.all([
    crypto.subtle.digest('SHA-256', encoder.encode(candidate)),
    crypto.subtle.digest('SHA-256', encoder.encode(expected))
  ]);
  return constantTimeEqual(bytesToBase64Url(new Uint8Array(candidateDigest)), bytesToBase64Url(new Uint8Array(expectedDigest)));
}

async function signSession(expiry, hostname, secret) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(`v1|${hostname}|${expiry}`));
  return bytesToBase64Url(new Uint8Array(signature));
}

async function hasValidSession(request, hostname, secret) {
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookie = cookieHeader.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${SESSION_COOKIE}=`));
  if (!cookie) return false;

  const value = cookie.slice(SESSION_COOKIE.length + 1);
  const separator = value.indexOf('.');
  if (separator < 1) return false;
  const expiry = value.slice(0, separator);
  const signature = value.slice(separator + 1);
  if (!/^\d+$/.test(expiry) || Number(expiry) <= Math.floor(Date.now() / 1000) || !signature) return false;

  return constantTimeEqual(signature, await signSession(expiry, hostname, secret));
}

function loginPage(message = '', status = 200) {
  const notice = message
    ? `<p class="notice" role="alert">${message}</p>`
    : '';
  const unavailable = status === 503;
  const form = unavailable
    ? ''
    : '<form action="/__unlock" method="post"><label class="visually-hidden" for="password">Passwort</label><input id="password" name="password" type="password" placeholder="Passwort eingeben" autocomplete="current-password" maxlength="256" required autofocus><button type="submit">Öffnen</button></form>';

  return new Response(`<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#09090b">
  <meta name="robots" content="noindex,nofollow">
  <title>Für Dich</title>
  <style>
    * { box-sizing: border-box; }
    html, body { width: 100%; min-height: 100%; margin: 0; background: #09090b; }
    body { min-height: 100vh; min-height: 100dvh; display: grid; place-items: center; padding: max(1.25rem, env(safe-area-inset-top)) 1.25rem max(1.25rem, env(safe-area-inset-bottom)); color: #fff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    main { width: min(100%, 22rem); text-align: center; animation: appear .5s ease both; }
    h1 { margin: 0 0 1.4rem; color: #fda4af; font-family: Georgia, serif; font-size: 2rem; font-weight: 500; }
    form { display: grid; gap: .7rem; }
    input { width: 100%; min-height: 3.2rem; padding: 0 1rem; border: 1px solid rgba(253,164,175,.28); border-radius: 1rem; outline: none; color: #fff; background: #151216; font: inherit; text-align: center; }
    input:focus { border-color: #fda4af; box-shadow: 0 0 0 3px rgba(244,63,94,.16); }
    button { min-height: 3.2rem; border: 0; border-radius: 1rem; color: #fff; background: linear-gradient(110deg, #e83b60, #be123c); font: inherit; font-weight: 650; cursor: pointer; }
    button:active { transform: scale(.985); }
    .notice { margin: .9rem 0 0; color: #fda4af; font-size: .9rem; }
    .visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; clip-path: inset(50%); }
    @keyframes appear { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }
  </style>
</head>
<body>
  <main><h1>Für Dich</h1>${form}${notice}</main>
</body>
</html>`, {
    status,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Cache-Control': 'private, no-store, max-age=0',
      'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
      'Referrer-Policy': 'no-referrer',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
    }
  });
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const sitePassword = env.SITE_PASSWORD;

  if (!sitePassword) return loginPage('Der Zugangsschutz ist noch nicht eingerichtet.', 503);

  if (url.pathname === '/__unlock' && request.method === 'POST') {
    let candidate = '';
    try {
      const form = await request.formData();
      candidate = String(form.get('password') || '');
    } catch (_) {
      return loginPage('Das Passwort stimmt nicht.', 401);
    }

    if (!(await passwordMatches(candidate, sitePassword))) return loginPage('Das Passwort stimmt nicht.', 401);

    const expiry = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
    const signature = await signSession(expiry, url.hostname, sitePassword);
    return new Response(null, {
      status: 303,
      headers: {
        'Location': '/',
        'Cache-Control': 'no-store',
        'Set-Cookie': `${SESSION_COOKIE}=${expiry}.${signature}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_SECONDS}`
      }
    });
  }

  if (!(await hasValidSession(request, url.hostname, sitePassword))) {
    if (request.method !== 'GET' && request.method !== 'HEAD') return loginPage('', 401);
    return loginPage();
  }

  const response = await context.next();
  const headers = new Headers(response.headers);
  headers.set('Cache-Control', 'private, no-store, max-age=0');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
