const toggleButton = document.querySelector("#darkmode");

toggleButton.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("dark");
});
