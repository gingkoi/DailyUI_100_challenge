window.setTimeout(test, 1000);
const popout = document.querySelector("#popout");
function test() {
  popout.classList.remove("hidden");
  popout.classList.add("transition-all");
}

const closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => {
  popout.classList.add("hidden");
});
