function enviarWebhook(jogo) {
  fetch("COLE_AQUI_SUA_URL_DO_WEBHOOK", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "PugHall Bot",
      content: `🕹️ Novo jogo enviado!\n🎮 Jogo: **${jogo}**`
    })
  })
  .then(() => console.log("Webhook enviado"))
  .catch(err => console.error("Erro:", err));
}

// 👇 ISSO GARANTE QUE A FUNÇÃO FIQUE GLOBAL
window.enviarWebhook = enviarWebhook;
