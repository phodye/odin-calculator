//initial calculator functions

//adding 
const add = function(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;
}

//subtracting 
const subtract = function(firstNumber, secondNumber) {
    let result = firstNumber - secondNumber;
    return result;
}

//multiplication
const multiply = function(firstNumber, secondNumber) {
    let result = firstNumber * secondNumber;
    return result;
}

//division
const divide = function(firstNumber, secondNumber) {
    let result = firstNumber / secondNumber;
    return result;
}

//function to operate
let operate = function(operand, firstNumber, secondNumber) {
    if(operand === '+') {
        add(firstNumber, secondNumber);
    } else if (operand === '-') {
        subtract(firstNumber, secondNumber);
    } else if (operand === "*") {
        multiply(firstNumber, secondNumber);
    } else if (operand === "/") {
        divide(firstNumber, secondNumber);
    }
}