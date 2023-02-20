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
    let totalScore = Number(`${firstScore}${secondScore}`);
    function countTo() {
      let from = 0;
      let to = totalScore;
      let step = to > from ? 1 : -1;
      let interval = 20;

      if (from == to) {
        result = from;
        return;
      }
      let counter = setInterval(function () {
        from += step;
        result.textContent = `${from}%`;

        if (from === to) {
          clearInterval(counter);
        }
      }, interval);
    }

    document.querySelector("#hiding").classList.toggle("hidden");
    if (totalScore >= 80 && totalScore < 100) {
      countTo();
      description.textContent = "You two go together like coke and mentos!";
    } else if (totalScore >= 100) {
      result.textContent = `100%`;
      description.textContent = "Two love birds are meant together!";
    } else if (totalScore >= 50 && totalScore < 80) {
      countTo();
      description.textContent = "Do you believe in miracles? Love is coming!";
    } else if (totalScore >= 30 && totalScore < 50) {
      countTo();
      description.textContent = "Nothing is impossible! Magic do happens!";
    } else if (totalScore === 0) {
      result.textContent = `0%`;
      description.textContent = "Prove us wrong! Go for your lover!";
    } else {
      countTo();
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
    let totalScore = Number(`${firstScore}${secondScore}`);
    function countTo() {
      let from = 0;
      let to = totalScore;
      let step = to > from ? 1 : -1;
      let interval = 20;

      if (from == to) {
        result = from;
        return;
      }
      let counter = setInterval(function () {
        from += step;
        result.textContent = `${from}%`;

        if (from === to) {
          clearInterval(counter);
        }
      }, interval);
    }

    document.querySelector("#hiding").classList.toggle("hidden");
    if (totalScore >= 80 && totalScore < 100) {
      countTo();
      description.textContent = "You two go together like coke and mentos!";
    } else if (totalScore >= 100) {
      result.textContent = `100%`;
      description.textContent = "Two love birds are meant together!";
    } else if (totalScore >= 50 && totalScore < 80) {
      countTo();
      description.textContent = "Do you believe in miracles? Love is coming!";
    } else if (totalScore >= 30 && totalScore < 50) {
      countTo();
      description.textContent = "Nothing is impossible! Magic do happens!";
    } else if (totalScore === 0) {
      result.textContent = `0%`;
      description.textContent = "Prove us wrong! Go for your lover!";
    } else {
      countTo();
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
