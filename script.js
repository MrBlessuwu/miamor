// Animación de corazones flotando
function corazonesFlotando() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("corazon");
  document.body.appendChild(heart);

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(corazonesFlotando, 1000);

// Botón especial que muestra un mensaje
function botonMagico() {
  alert("Marian, eres mi alegría eterna 💜");
}
