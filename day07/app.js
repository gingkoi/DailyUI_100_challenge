const tab_account = document.querySelector("#tab-account");
const tab_noti = document.querySelector("#tab-noti");

const date = new Date();
console.log(date);

tab_noti.addEventListener("click", () => {
  document.querySelector("#account").classList.add("hidden");
  document.querySelector("#noti").classList.remove("hidden");
  document.querySelector("#tab-noti").classList.add("bg-[#f7faff]");
  document.querySelector("#tab-account").classList.remove("bg-[#f7faff]");
});
tab_account.addEventListener("click", () => {
  document.querySelector("#noti").classList.add("hidden");
  document.querySelector("#account").classList.remove("hidden");
  document.querySelector("#tab-account").classList.add("bg-[#f7faff]");
  document.querySelector("#tab-noti").classList.remove("bg-[#f7faff]");
});
