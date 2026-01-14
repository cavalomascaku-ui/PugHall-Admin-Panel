self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

/*
  IMPORTANTE:
  - NÃO intercepta Firebase
  - NÃO cacheia nada
  - Só existe pra o Chrome reconhecer PWA real
*/
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Libera Firebase / WebSocket / Google
  if (
    url.origin.includes('firebase') ||
    url.origin.includes('google') ||
    url.protocol === 'ws:' ||
    url.protocol === 'wss:'
  ) {
    return;
  }

  event.respondWith(fetch(event.request));
});
