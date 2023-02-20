let calculateBtn = document.querySelector("#calculateBtn");
let againBtn = document.querySelector("#againBtn");
let calculate = function () {
  calculateBtn.addEventListener("click", () => {
    let result = document.querySelector("#result");
    let description = document.querySelector("#description");
    let person1 = document.querySelector("#person1").value.toUpperCase();
    let person2 = document.querySelector("#person2").value.toUpperCase();
    let combineNames = person1 + person2;
    let T = combineNames.split("T").length - 1;
    let R = combineNames.split("R").length - 1;
    let U = combineNames.split("U").length - 1;
    let E = combineNames.split("E").length - 1;
    let firstScore = T + R + U + E;
    let L = combineNames.split("L").length - 1;
    let O = combineNames.split("O").length - 1;
    let V = combineNames.split("V").length - 1;
    let secondScore = L + O + V + E;

    document.querySelector("#hiding").classList.toggle("hidden");
    if (
      Number(`${firstScore}${secondScore}`) >= 80 &&
      Number(`${firstScore}${secondScore}`) < 100
    ) {
      result.textContent = `${firstScore}${secondScore}%`;
      description.textContent = "You two go together like coke and mentos!";
    } else if (Number(`${firstScore}${secondScore}`) >= 100) {
      result.textContent = `100%`;
      description.textContent = "Two love birds are meant together!";
    } else if (
      Number(`${firstScore}${secondScore}`) >= 50 &&
      Number(`${firstScore}${secondScore}`) < 80
    ) {
      result.textContent = `${firstScore}${secondScore}%`;
      description.textContent = "Do you believe in miracles? Love is coming!";
    } else if (
      Number(`${firstScore}${secondScore}`) >= 30 &&
      Number(`${firstScore}${secondScore}`) < 50
    ) {
      result.textContent = `${firstScore}${secondScore}%`;
      description.textContent = "Nothing is impossible! Magic do happens!";
    } else if (Number(`${firstScore}${secondScore}`) === 0) {
      result.textContent = `0%`;
      description.textContent = "Prove us wrong! Go for your lover!";
    } else {
      result.textContent = `${firstScore}${secondScore}%`;
      description.textContent = "Prove us wrong! Go for your lover!";
    }
  });
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let result = document.querySelector("#result");
    let description = document.querySelector("#description");
    let person1 = document.querySelector("#person1").value.toUpperCase();
    let person2 = document.querySelector("#person2").value.toUpperCase();
    let combineNames = person1 + person2;
    let T = combineNames.split("T").length - 1;
    let R = combineNames.split("R").length - 1;
    let U = combineNames.split("U").length - 1;
    let E = combineNames.split("E").length - 1;
    let firstScore = T + R + U + E;
    let L = combineNames.split("L").length - 1;
    let O = combineNames.split("O").length - 1;
    let V = combineNames.split("V").length - 1;
    let secondScore = L + O + V + E;

    document.querySelector("#hiding").classList.toggle("hidden");
    if (
      Number(`${firstScore}${secondScore}`) >= 80 &&
      Number(`${firstScore}${secondScore}`) < 100
    ) {
      result.textContent = `${firstScore}${secondScore}%`;
      description.textContent = "You two go together like coke and mentos!";
    } else if (Number(`${firstScore}${secondScore}`) >= 100) {
      result.textContent = `100%`;
      description.textContent = "Two love birds are meant together!";
    } else if (
      Number(`${firstScore}${secondScore}`) >= 50 &&
      Number(`${firstScore}${secondScore}`) < 80
    ) {
      result.textContent = `${firstScore}${secondScore}%`;
      description.textContent = "Do you believe in miracles? Love is coming!";
    } else if (
      Number(`${firstScore}${secondScore}`) >= 30 &&
      Number(`${firstScore}${secondScore}`) < 50
    ) {
      result.textContent = `${firstScore}${secondScore}%`;
      description.textContent = "Nothing is impossible! Magic do happens!";
    } else if (Number(`${firstScore}${secondScore}`) === 0) {
      result.textContent = `0%`;
      description.textContent = "Prove us wrong! Go for your lover!";
    } else {
      result.textContent = `${firstScore}${secondScore}%`;
      description.textContent = "Prove us wrong! Go for your lover!";
    }
  }
});
calculate();

againBtn.addEventListener("click", () => {
  document.querySelector("#hiding").classList.toggle("hidden");
});
document.querySelector("#hiding").addEventListener("click", () => {
  document.querySelector("#hiding").classList.add("hidden");
});
