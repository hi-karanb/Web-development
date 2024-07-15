const display = document.getElementById('display');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');
const buttons = document.querySelectorAll('.buttons button');

let currentNumber = "";
let previousNumber = "";
let operator = "";

function updateDisplay(value) {
  display.innerText = value;
}

function clearAll() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateDisplay("");
  input1.value = "";
  input2.value = "";
}

function handleNumber(number) {
  currentNumber += number;
  updateDisplay(currentNumber);
}

function handleOperator(op) {
  if (currentNumber === "") return;
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function calculate() {
  if (currentNumber === "" || previousNumber === "") return;

  let result;
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Error: Division by zero!");
        return;
      }
      result = num1 / num2;
      break;
    case "square":
      result = num1 * 2;
      break;
    case "cube":
      result = num1 * 3;
      break;
    default:
      result = "Invalid operation";
  }

  updateDisplay(result);
  previousNumber = result.toString();
  currentNumber = ""; 
  operator = ""; 
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.operator;
    if (value === undefined) {
      handleNumber(value); 
    } else if (value === "clear") {
      clearAll();
    } else if (value === "=") {
      calculate();
    } else {
      handleOperator(value);
    }
  });
});


document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(key)) {
    handleNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleOperator(key);
  } else if (key === "=" || key === "Enter") {
    calculate();
  } else if (key === "Escape" || key === "Delete") {
    clearAll();
  }
});