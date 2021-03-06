//switch function for main operations ===============================================================
function switchCalculations() {
   console.log(operand);
   switch (operand) {
      case "+":
            add(firstInput, secondInput);
         break;
      case "-":
            subtract(firstInput, secondInput);
         break;
      case "*":
            multiply(firstInput, secondInput);
         break;
      case "/":
            divide(firstInput, secondInput);
         break;
    }
}

// calculator functions =============================================================================

//adding 
const add = function(firstNumber, secondNumber) {
    let result = Number(firstNumber) + Number(secondNumber);
    display.innerHTML = result;
    upperDisplay.innerHTML = '';
    firstInput = result;
    secondInput = '';
    return result;
}


//subtracting 
const subtract = function(firstNumber, secondNumber) {
    let result = Number(firstNumber) - Number(secondNumber);
    display.innerHTML = result;
    upperDisplay.innerHTML = '';
    firstInput = result;
    secondInput = '';
}

//multiplication
const multiply = function(firstNumber, secondNumber) {
    let result = Number(firstNumber) * Number(secondNumber);
    display.innerHTML = result;
    upperDisplay.innerHTML = '';
    firstInput = result;
    secondInput = '';
}

//division
const divide = function(firstNumber, secondNumber) {
    let result = Number(firstNumber) / Number(secondNumber);
    display.innerHTML = result;
    upperDisplay.innerHTML = '';
    firstInput = result;
    secondInput = '';
}

// number/display functions =============================================================================
//variables
const upperDisplay = document.getElementById("upperDisplay");
const display = document.getElementById("display");
let firstInput = '';
let secondInput = '';
let product = '';
let operand = '';

//display numbers
const numberBtns = document.querySelectorAll('.numberButton');
numberBtns.forEach( element => {
   element.addEventListener('click', assignValue);
 })

 function assignValue(e) {
   const value = e.target.value;
   checkDisplay();
   display.innerHTML += value;
 }

 //decimal
 const decimalButton = document.getElementById("decimal");
 decimalButton.addEventListener('click', () => {
   if(display.innerHTML.includes(".")){
      return
   } else {
   display.innerHTML += '.';
   }
 })

//backspace
const backspaceButton = document.getElementById("backspace");
backspaceButton.addEventListener('click', () => {
   let newDisplay = display.innerHTML.slice(0, -1);
   display.innerHTML = newDisplay;
})

//positive negative
const posnegButton = document.getElementById("posNeg");
posnegButton.addEventListener('click', () => {
   if(display.innerHTML.charAt(0) != '-') {
      let withNegative = '-' + display.innerHTML;
      display.innerHTML = withNegative;
   } else {
      let withoutNegative = display.innerHTML.substring(1);
      display.innerHTML = withoutNegative;
   }
})

//convert to decimal
const percentButton = document.getElementById("percent");
percentButton.addEventListener('click', () => {
   if(display.innerHTML.charAt(0) === "."){
      let wholeNumber = display.innerHTML.substring(1);
      display.innerHTML = wholeNumber;
   } else if (display.innerHTML.includes(".")) {
      return 
   } else {
      let asPercent = '.' + display.innerHTML;
      display.innerHTML = asPercent;
   }
})

 //check display 
 function checkDisplay() {
    if (firstInput != '' && upperDisplay.innerHTML == '' && secondInput == '') {
       upperDisplay.innerHTML = display.innerHTML;
       display.innerHTML = '';
    }
 }

 //store value
 function storeValue() {
    if(firstInput != '' && secondInput != '') {
       return;
    } else if(display.innerHTML != '' && firstInput != '' && operand != '') {
       secondInput = display.innerHTML;
       return secondInput;
    } else if(display.innerHTML != '') {
      firstInput = display.innerHTML;
      upperDisplay.innerHTML = firstInput;
      display.innerHTML = '';
      return firstInput;
    }
 }

 //clear numbers
 const clearBtn = document.getElementById("clear");
 clearBtn.addEventListener("click", () =>{
     display.innerHTML = '';
     upperDisplay.innerHTML = '';
     firstInput = '';
     secondInput = '';
     product = '';
     operand = '';
 })

 //operand button functions =====================================================================================
 //addition
 const additionBtn = document.getElementById("addition");
 additionBtn.addEventListener("click", () => {
   if (!operand) {
      operand = '+';
   }
   storeValue();
   if(firstInput != '' && secondInput != '') {
      switchCalculations();
   }
   operand = '+';
})
 //subtraction
 const subtractionBtn = document.getElementById("subtraction");
 subtractionBtn.addEventListener("click", () => {
   if (!operand) {
      operand = '-';
   }
   storeValue();
   if(firstInput != '' && secondInput != '') {
      switchCalculations();
   }
   operand = '-';
 })
 //multiplication
 const multiplicationBtn = document.getElementById("multiplication");
 multiplicationBtn.addEventListener("click", () => {
   if (!operand) {
      operand = '*';
   }
   storeValue();
   if(firstInput != '' && secondInput != '') {
      switchCalculations();
   }
   operand = '*';
 })
 //division
 const divisionBtn = document.getElementById("division");
 divisionBtn.addEventListener("click", () => {
   if(!operand) {operand = '/';
   }
   storeValue();
   if(firstInput != '' && secondInput != '') {
      switchCalculations();
   } 
   operand = '/';
 })

 
 //equals function
 const equalsBtn = document.getElementById("equals");
 equalsBtn.addEventListener("click", () => {
   if (!secondInput) {
      secondInput = display.innerHTML;
   }
   switchCalculations();
   firstInput = '';
   operand = '';
   secondInput = '';
})

// keyboard functionality ==================================================================================
document.addEventListener('keydown', (event) => {
   checkDisplay();
if(event.code === "Digit0") {
   display.innerHTML += 0;
} else if (event.code === "Digit1") {
   display.innerHTML += 1;
} else if (event.code === "Digit2") {
   display.innerHTML += 2;
} else if (event.code === "Digit3") {
   display.innerHTML += 3;
} else if (event.code === "Digit4") {
   display.innerHTML += 4;
} else if (event.code === "Digit5") {
   display.innerHTML += 5;
} else if (event.code === "Digit6") {
   display.innerHTML += 6;
} else if (event.code === "Digit7") {
   display.innerHTML += 7;
} else if (event.code === "Digit8") {
   display.innerHTML += 8;
} else if (event.code === "Digit9") {
   display.innerHTML += 9;
}
}) 