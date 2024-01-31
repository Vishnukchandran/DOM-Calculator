let expression = "";

function appendNumber(number) {
  expression += number;
  updateDisplay();
}

function appendOperation(operation) {
  expression += ` ${operation} `;
  updateDisplay();
}

function appendDecimal() {
  if (!expression.includes(".")) {
    expression += ".";
    updateDisplay();
  }
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById("result").value = result;
    expression = "";
  } catch (error) {
    alert("Invalid expression");
    clearResult();
  }
}

function updateDisplay() {
  document.getElementById("result").value = expression;
}

function clearResult() {
  expression = "";
  updateDisplay();
}
