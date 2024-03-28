//   random RBG generator
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
const intervalId = setInterval(function () {
  const letters = document.querySelectorAll(".letter");
  for (let letter of letters) {
    letter.style.color = randomRGB();
  }
}, 1000);
