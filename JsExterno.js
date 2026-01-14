<script>
function enviarWebhook(jogo) {
  fetch("COLE_AQUI_SUA_URL_DO_WEBHOOK", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "PugHall Bot",
      avatar_url: "https://i.imgur.com/4M34hi2.png",
      content: `🕹️ Novo jogo enviado para análise!\n🎮 Jogo: **${jogo}**`
    })
  })
  .then(() => console.log("Webhook enviado"))
  .catch(err => console.error("Erro:", err));
}
</script>
