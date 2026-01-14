self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// <<< ESSENCIAL PRA INSTALAÇÃO >>>
self.addEventListener('fetch', event => {
  // Esse handler faz com que o SW *controle* a página
  event.respondWith(fetch(event.request));
});
