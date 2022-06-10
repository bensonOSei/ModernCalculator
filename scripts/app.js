class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  //clears the calculator screen
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    //Removes the last number from the calculator screen
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  //Adds newly entered numbers to the ones already entered
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return; //Stops the function when a dot (.) is entered
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
    //converts both numbers to string to prevent JS from adding them mathematically
  }

  //choose operation type
  chooseOperation(operation) {
    if (this.currentOperand === "") return; 
    //stops the function when current operand is not set

    if (this.previousOperand !== "") {
      this.compute(); //Does actual computing when the pervious operand has been set
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    //console.log('cpp')

    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;

      case "-":
        computation = prev - current;
        break;

      case "*":
        computation = prev * current;
        break;

      case "/":
        computation = prev / current;
        break;
      default:
        //return;
        console.log("fail");
    }

    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  //helper function to display numbers with commas
  /*Splits the number enters into two, first part is before the decimal poin (.)
    second part after the decimal point(.)
  */
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]); //First part; actual integer
    const decimalDigits = stringNumber.split(".")[1]; //for decimals; after the decimal point

    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  //Displays entries onto the calculator screen
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    ); //dsiplays entered operands

    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
      //Concatinates the previous operand and the operation and displays on the screen
    } else {
      previousOperandTextElement.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();

  });
});

equalButton.addEventListener("click", (button) => {

  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {

  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {

  calculator.delete();
  calculator.updateDisplay();
});
