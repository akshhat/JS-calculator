const calculator = document.querySelector("main");
const calcKeys = [
  "C",
  "DEL",
  "÷",
  7,
  8,
  9,
  "x",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  "NEG",
  0,
  ".",
  "=",
];

for (let i = 0; i < 7; i++) {
  let btnRow = document.createElement("div");
  btnRow.classList.add("btnRow");
  if (i == 0) {
    btnRow.id = "helperText";
  }
  if (i == 1) {
    btnRow.id = "display";
  }
  if (i > 1) {
    btnRow.classList.add("numKeys");
  }
  calculator.appendChild(btnRow);
}

document.querySelectorAll(".numKeys").forEach((row, index) => {
  if (index == 0) {
    for (let i = 0; i < 3; i++) {
      let numBtn = document.createElement("button");
      numBtn.classList.add("numeric");
      if (i == 0) {
        numBtn.id = "clr";
      }
      row.appendChild(numBtn);
    }
  } else {
    for (let i = 0; i < 4; i++) {
      let numBtn = document.createElement("button");
      numBtn.classList.add("numeric");
      row.appendChild(numBtn);
    }
  }
});

let numDisplay = document.createElement("input");
numDisplay.type = "number";
numDisplay.id = "input";
document.querySelector("#display").appendChild(numDisplay);

document.querySelectorAll(".numeric").forEach((key, i) => {
  key.innerText = calcKeys[i];
});

// Giving the required IDs to buttons
document.querySelectorAll(".numeric").forEach((button) => {
  switch (button.innerText) {
    case "0":
      button.id = "block0";
      break;
    case "1":
      button.id = "block1";
      break;
    case "2":
      button.id = "block2";
      break;
    case "3":
      button.id = "block3";
      break;
    case "4":
      button.id = "block4";
      break;
    case "5":
      button.id = "block5";
      break;
    case "6":
      button.id = "block6";
      break;
    case "7":
      button.id = "block7";
      break;
    case "8":
      button.id = "block8";
      break;
    case "9":
      button.id = "block9";
      break;
    case "+":
      button.id = "plus";
      break;
    case "-":
      button.id = "minus";
      break;
    case "x":
      button.id = "multiply";
      break;
    case "÷":
      button.id = "divide";
      break;
    case ".":
      button.id = "dot";
      break;
    case "=":
      button.id = "ans";
      break;
    case "C":
      button.id = "clr";
      break;
    case "DEL":
      button.id = "del";
      break;
    case "NEG":
      button.id = "neg";
      break;
  }
});

// Testing helper text
document.querySelectorAll(".btnRow").forEach((row, index) => {
  if (index == 0) {
    row.innerText = "1234567";
  }
});

// Calculator Functionality
document.querySelector("#clr").addEventListener("click", () => {
  document.querySelector("#input").value = "";
  document.querySelector("#helperText").innerText = "";
});
