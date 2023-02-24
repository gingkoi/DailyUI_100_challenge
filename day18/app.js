const price_pointer = document.querySelector("#price-pointer");
const price_detail = document.querySelector("#price-details");
const price_pointer_2 = document.querySelector("#price-pointer-2");
const price_detail_2 = document.querySelector("#price-details-2");

price_pointer.addEventListener("mouseover", () => {
  price_detail.classList.toggle("hidden");
});
price_pointer.addEventListener("mouseout", () => {
  price_detail.classList.toggle("hidden");
});
price_pointer_2.addEventListener("mouseover", () => {
  price_detail_2.classList.toggle("hidden");
});
price_pointer_2.addEventListener("mouseout", () => {
  price_detail_2.classList.toggle("hidden");
});
