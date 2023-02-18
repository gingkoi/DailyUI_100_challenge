let calculateBtn = document.querySelector("#calculate");
const darkModeBtn = document.querySelector("#darkmode");
const result = function (bill, service, people) {
  return (bill + bill * (service / 100)) / people;
};

calculateBtn.addEventListener("click", () => {
  let bill = Number(document.querySelector("#bill").value);
  let service = Number(document.querySelector("#service").value);
  let people = Number(document.querySelector("#people").value);
  let per_person = document.querySelector("#result");
  if (
    Number.isInteger(bill) &&
    Number.isInteger(service) &&
    Number.isInteger(people)
  ) {
    let total = result(bill, service, people);
    per_person.textContent = `$${total}`;
    per_person.classList.remove("text-red-800");
  } else {
    per_person.classList.toggle("text-red-800");
    per_person.textContent = `Invalid value`;
  }
});
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
