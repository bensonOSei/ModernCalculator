class calculator {
    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
    }

    calculate() {

        let num1 = parseInt(this.firstNumber);
        let num2 = parseInt(this.secondNumber);
        let mathMatic;
        switch (this.operator) {
            case "+":
                mathMatic = this.firstNumber + this.secondNumber;
                break;

            case "-":
                mathMatic = this.firstNumber - this.secondNumber;
                break;

            case "*":
                mathMatic = this.firstNumber * this.secondNumber;
                break;

            case "/":
                mathMatic = this.firstNumber / this.secondNumber;
                break;
        }

        return mathMatic;
    }
    
}

const firstNum = document.getElementById("num1").value;
const secondNum = document.getElementById("num2").value;




//console.log(calc.calculate());





/*function addOps(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    document.getElementById('result').innerHTML = a + b;
    //console.log( a + b);
}

function subOps(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    document.getElementById('result').innerHTML = a - b;

}

function mulOps(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    document.getElementById('result').innerHTML = a * b;

}

function divOps(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    document.getElementById('result').innerHTML = a / b;

}*/