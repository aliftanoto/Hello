document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");

  page.style.opacity = "0";
  page.style.transform = "translateY(12px)";

  requestAnimationFrame(() => {
    page.style.transition = "opacity 1.2s ease, transform 1.2s ease";
    page.style.opacity = "1";
    page.style.transform = "translateY(0)";
  });
});
const balloonLayer = document.querySelector(".balloon-layer");

const colors = ["pink", "lavender", "peach", "blue"];

function createBalloon(){
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  const color = colors[Math.floor(Math.random() * colors.length)];
  balloon.classList.add(color);

  const size = Math.random() * 30 + 40;
  balloon.style.width = size + "px";
  balloon.style.height = size * 1.3 + "px";

  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.animationDuration = Math.random() * 10 + 15 + "s";

  balloonLayer.appendChild(balloon);

  animateBalloon(balloon);
}

function animateBalloon(balloon){
  const sway = Math.random() * 40 - 20;

  balloon.animate([
    { transform: "translateY(0) translateX(0)", opacity: 0.15 },
    { transform: `translateY(-120vh) translateX(${sway}px)`, opacity: 0.25 }
  ], {
    duration: parseFloat(balloon.style.animationDuration) * 1000,
    easing: "linear"
  });

  setTimeout(() => {
    balloon.remove();
  }, parseFloat(balloon.style.animationDuration) * 1000);
}

/* Spawn loop */
setInterval(createBalloon, 1800);
