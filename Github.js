//   random RBG generator
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
const intervalId = setInterval(function () {
  for (let letter of document.querySelectorAll(".letter")) {
    letter.style.color = randomRGB();
  }
}, 1000);
