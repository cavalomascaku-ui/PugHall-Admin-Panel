self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

// Listener para capturar notificações enviadas via Push
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "Novo Jogo para Análise!";
  const options = {
    body: data.body || "Um novo jogo foi enviado ao PugHall.",
    icon: "https://i.imgur.com/rM43tnX.jpeg",
    badge: "https://i.imgur.com/rM43tnX.jpeg"
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
