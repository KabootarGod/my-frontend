const btn = document.getElementById("btn");
const num = document.getElementById("num");
let numbero;

btn.onclick = function () {
  numbero = Math.floor(Math.random() * 10) + 1;
  num.textContent = numbero;
};
