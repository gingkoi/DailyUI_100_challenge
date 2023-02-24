const price_pointer = document.querySelector("#price-pointer");
const price_detail = document.querySelector("#price-details");

price_pointer.addEventListener("mouseover", () => {
  price_detail.classList.toggle("hidden");
});
price_pointer.addEventListener("mouseout", () => {
  price_detail.classList.toggle("hidden");
});
