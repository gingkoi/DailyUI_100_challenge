const account_setting = document.querySelector("#account_click");
const show_account = document.querySelector("#account");
const noti_setting = document.querySelector("#noti_click");
const show_noti = document.querySelector("#noti");

account_setting.addEventListener("click", () => {
  show_account.classList.toggle("hidden");
});

noti_setting.addEventListener("click", () => {
  show_noti.classList.toggle("hidden");
});
