function enviarWebhook(jogo) {
  fetch("https://discord.com/api/webhooks/1461101701267197984/X44Qhjy9Fq8-78rKvq9m5WCznEm3KIL3RWlB2n9s8BYwfyNb3yqO1d06qTVY9jLV0Twv", {
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
