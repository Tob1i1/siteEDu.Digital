document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (nome && email) {
    mensagem.textContent = "Mensagem enviada com sucesso!";
    mensagem.style.color = "green";
    this.reset();
  } else {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.style.color = "red";
  }
});

function mostrarVideo(id) {
  var video = document.getElementById(id);
  video.style.display = (video.style.display === "none") ? "block" : "none";
}