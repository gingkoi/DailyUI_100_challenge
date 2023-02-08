const button = document.querySelector("#night");
const button2 = document.querySelector("#light");
button.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("dark");
});
button2.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("dark");
});
