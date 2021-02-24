// Layout out the calculator
const calculator = document.querySelector("main");
const calcKeys = [
  "C",
  "DEL",
  "÷",
  7,
  8,
  9,
  "×",
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

// Giving IDs to btnRows for styling
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

// Creating the buttons
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

// Answer display panel
let numDisplay = document.createElement("input");
numDisplay.type = "text";
numDisplay.id = "input";
document.querySelector("#display").appendChild(numDisplay);

// Giving numbers/symbols to respective buttons
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
    case "×":
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

// Starting number in calculator
numDisplay.value = 0;

// Calculator Functionality
let accumulator = {
  val: 0,
  opr: "",
};

const clearDisplay = () => {
  numDisplay.value = 0;
  document.querySelector("#helperText").innerText = "";
  accumulator.val = 0;
  accumulator.opr = "";
};

const numericDel = () => {
  let num = Number(numDisplay.value);
  num = (num - (num % 10)) / 10;
  numDisplay.value = num;
};

const negate = () => {
  let num = Number(numDisplay.value);
  num = -1 * num;
  numDisplay.value = num;
};

const numType = (digit) => {
  if (typeof digit == "number") {
    let num = Number(numDisplay.value);
    num = num * 10 + digit;
    numDisplay.value = num;
  }
};

const arithmetic = (sign) => {
  switch (accumulator.opr) {
    case "+":
      accumulator.val += Number(document.querySelector("#input").value);
      break;
    case "-":
      accumulator.val -= Number(document.querySelector("#input").value);
      break;
    case "×":
      accumulator.val *= Number(document.querySelector("#input").value);
      break;
    case "÷":
      if (Number(document.querySelector("#input").value) != 0) {
        console.log("Not zero");
        accumulator.val /= Number(document.querySelector("#input").value);
      } else {
        if (accumulator.val == 0) {
          accumulator.val = "NaN";
        } else {
          accumulator.val = "Infinity";
        }
      }
      break;
    default:
      accumulator.val = Number(document.querySelector("#input").value);
  }
  accumulator.opr = sign;
  document.querySelector(
    "#helperText"
  ).innerText = `${accumulator.val} ${sign}`;
  document.querySelector("#input").value = "";
  console.log(accumulator);
};

const ansPrint = () => {
  arithmetic();
  if (
    typeof accumulator == "number" &&
    accumulator.val < 999999999999 &&
    accumulator.val > -999999999999
  ) {
    document.querySelector("#input").value = accumulator.val;
  } else if (typeof accumulator == "number") {
    document.querySelector("#input").value = "NaN";
    window.alert("I can only calculate for values between -10^12 & 10^12");
  } else {
    document.querySelector("#input").value = accumulator.val;
  }
  accumulator.opr = "";
  document.querySelector("#helperText").innerText = "";
};

// Testing event delegation
calculator.addEventListener("click", (e) => {
  if (e.target.classList.contains("numeric")) {
    switch (e.target.id) {
      case "clr":
        clearDisplay();
        break;
      case "del":
        numericDel();
        break;
      case "neg":
        negate();
        break;
      case "divide":
        arithmetic("÷");
        break;
      case "multiply":
        arithmetic("×");
        break;
      case "minus":
        arithmetic("-");
        break;
      case "plus":
        arithmetic("+");
        break;
      case "ans":
        ansPrint();
        break;
      default:
        numType(Number(e.target.id[e.target.id.length - 1]));
        break;
    }
  }
});

// Testing keydown events
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Backspace":
      numericDel();
      break;
    case "Delete":
      clearDisplay();
      break;
    default:
      if (Number(e.key) >= 0 && Number(e.key) <= 9) {
        numType(Number(e.key));
      }
  }
});
