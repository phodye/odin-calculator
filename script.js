//initial calculator functions

//adding 
const add = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) + parseInt(secondNumber);
    console.log(result);
    display.innerHTML = result;
}

//subtracting 
const subtract = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) - parseInt(secondNumber);
    return result;
}

//multiplication
const multiply = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) * parseInt(secondNumber);
    return result;
}

//division
const divide = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) / parseInt(secondNumber);
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

//assign numbers
const upperDisplay = document.getElementById("upperDisplay");
const display = document.getElementById("display");
const numberBtns = document.querySelectorAll('.numberButton');
numberBtns.forEach( element => {
   element.addEventListener('click', storeValue);
 })

 function storeValue(e) {
   const value = e.target.value;
   display.innerHTML += value;
 }

 //clear numbers
 const clearBtn = document.getElementById("clear");
 clearBtn.addEventListener("click", () =>{
     display.innerHTML = '';
     upperDisplay.innerHTML = '';
 })

 //operand function
 const additionBtn = document.getElementById("addition");
 additionBtn.addEventListener("click", () => {
    if(display.innerHTML != '') {
        upperDisplay.innerHTML = display.innerHTML;
        display.innerHTML = '';
        operand = '+';
        return operand;
     } 
 })

 //equals function
 const equalsBtn = document.getElementById("equals");
 equalsBtn.addEventListener("click", () => {
     if(operand === '+') {
         add(upperDisplay.innerHTML, display.innerHTML)
         upperDisplay.innerHTML = '';
     }
 })