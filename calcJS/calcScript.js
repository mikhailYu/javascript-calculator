// button declarations
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn0 = document.querySelector(".btn0");
let btnDivide = document.querySelector(".btnDivide");
let btnMultiply = document.querySelector(".btnMultiply");
let btnSubtract = document.querySelector(".btnSubtract");
let btnAdd = document.querySelector(".btnAdd");
let btnEquals = document.querySelector(".btnEquals");
let btnClear = document.querySelector(".btnClear");
let btnDEL = document.querySelector(".btnDEL");
let btnDecimal = document.querySelector(".btnDecimal");

let numDisplay = document.querySelector(".numDisplay");
let numDisplayText;
let displayValue = "0";
let inputMemory;

let firstValue = 0;
let secondValue = 0;

let isReset = false;
let isAdd = false;
let isSubtract = false;
let isMultiply = false;
let isDivide = false;


fullReset();

function fullReset(){
    resetDisplay();
    resetOperators();
    firstValue = 0;
    secondValue = 0;
    isReset = false;
};

function resetDisplay(){
    if (numDisplay.hasChildNodes()){
    numDisplay.removeChild(numDisplayText);
    };
    displayValue = "0";
    numDisplayText = document.createTextNode(parseInt("0"));
    numDisplay.appendChild(numDisplayText);
};

function resetOperators(){
    isAdd = false;
    isSubtract = false;
    isMultiply = false;
    isDivide = false;
}


// operator functions

function operate(){
saveVal(2);
if(isAdd == true){
    displayValue = firstValue + +secondValue;
    updateDisplay();
    isReset = true;
    resetOperators();
} else if (isSubtract == true){
    displayValue = firstValue - secondValue;
    updateDisplay();
    isReset = true;
    resetOperators();
} else if (isMultiply== true){
    displayValue = firstValue * secondValue;
    updateDisplay();
    isReset = true;
    resetOperators();
} else if (isDivide == true){
    if(firstValue === 0 || secondValue === 0){
        dividedBy0();
    } else {
    displayValue = firstValue / secondValue;
    updateDisplay();
    isReset = true;
    resetOperators();
    }
}
};

// button listeners

btn1.addEventListener("click", () => {
inputMemory = 1;
numInput();
});

btn2.addEventListener("click", () => {
inputMemory = 2;
numInput();
});

btn3.addEventListener("click", () => {
inputMemory = 3;
numInput();
});

btn4.addEventListener("click", () => {
inputMemory = 4;
numInput();
});

btn5.addEventListener("click", () => {
inputMemory = 5;
numInput();
});

btn6.addEventListener("click", () => {
inputMemory = 6;
numInput();
});

btn7.addEventListener("click", () => {
inputMemory = 7;
numInput();
});

btn8.addEventListener("click", () => {
inputMemory = 8;
numInput();
});

btn9.addEventListener("click", () => {
inputMemory = 9;
numInput();
});

btn0.addEventListener("click", () => {
inputMemory = 0;
numInput();
});

btnClear.addEventListener("click", fullReset);

btnEquals.addEventListener("click", () => {
    operate();
});



btnAdd.addEventListener("click", () => {
isReset= false;
resetOperators();
isAdd = true;
saveVal(1);
resetDisplay();
});

btnSubtract.addEventListener("click", () => {
isReset= false;
resetOperators();
isSubtract = true;
saveVal(1);
resetDisplay();
});


btnMultiply.addEventListener("click", () => {
isReset= false;
resetOperators();
isMultiply = true;
saveVal(1);
resetDisplay();
});


btnDivide.addEventListener("click", () => {
isReset= false;
resetOperators();
isDivide = true;
saveVal(1);
resetDisplay();
});



// number display

function numInput(){
if (isReset == false){
displayValue = displayValue.concat(inputMemory);
updateDisplay();
} else {
    fullReset();
    displayValue = displayValue.concat(inputMemory);
    updateDisplay();
}
};

function updateDisplay(){
if (numDisplay.hasChildNodes()){
numDisplay.removeChild(numDisplayText);
}
numDisplayText = document.createTextNode(parseInt(displayValue));
numDisplay.appendChild(numDisplayText);
};

// memory storage
function saveVal(value){
    if(value == 1){
        firstValue = parseInt(displayValue);
        console.log("first value = " + firstValue)
    } else if (value == 2){
        secondValue = parseInt(displayValue);
        console.log("first value = " + firstValue)
        console.log("second value = " + secondValue)
    }
};

function dividedBy0 (){
    if (numDisplay.hasChildNodes()){
    numDisplay.removeChild(numDisplayText);
    }
    displayValue = "LMAO";
    numDisplayText = document.createTextNode(displayValue);
    numDisplay.appendChild(numDisplayText)
};






