function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Seleccionar todas las tarjetas
const cards = document.querySelectorAll(".card");

// Añadir evento de hover a cada tarjeta
cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    const randomColor = getRandomColor();
    card.style.borderColor = randomColor;

    const btnCard = card.querySelector(".card__btnCard");
    if (btnCard) {
      btnCard.style.backgroundColor = randomColor;
    }
  });

  card.addEventListener("mouseout", () => {
    card.style.borderColor = "transparent";

    const btnCard = card.querySelector(".card__btnCard");
    if (btnCard) {
      btnCard.style.backgroundColor = "white";
    }
  });
});
