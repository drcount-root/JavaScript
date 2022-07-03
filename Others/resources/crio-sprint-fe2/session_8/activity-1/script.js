const span = document.getElementsByTagName("span");

const incBTN = document.getElementById("inc");
const decBTN = document.getElementById("dec");

incBTN.addEventListener("click", () => {
  span[0].innerText++;
});

decBTN.addEventListener("click", () => {
  span[0].innerText--;
});
