// Globals bad but for now
/* 
    firstNum: used for recording the first number of the expression.
    op: Used to record the selected operator.
    waiting: Tells if a second number has be entered after the 
            operator was selected.
*/
let values = {
    firstNum: 0,
    op: "",
    waiting: false
}

// math

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 5138008;
    }
    return a / b;
}

function operate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            // case where only screen is given
            // and no operator
            return b;
    }
}

function addDigit(oldNum, newD) {
    if (oldNum === 0) {
        return newD;
    }
    return oldNum * 10 + newD;
}

// Display

function changeDisplay(value) {
    const display = document.querySelector(".display-value");
    const digit = Number(value);
    // If an operator is selected and waitng on a new number
    if(values.waiting) {
        values.firstNum = Number(display.innerHTML);
        display.innerHTML = digit;
        values.waiting = false;
    } else {
        display.innerHTML = addDigit(display.innerHTML, digit);
    }
}

function removePress() {
    const operators = document.querySelectorAll(".operator")
    operators.forEach(operator => {
        operator.classList.remove("press");
    });
}

// Buttons

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        changeDisplay(number.innerHTML);
    });
})


const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        // If there is already an operator selected, 
        // Remove the operator hightlight and perform the operation.
        if (values.op !== "") {
            removePress()
            const display = document.querySelector(".display-value");
            disVal = Number(display.innerHTML);
            values.firstNum = operate(values.firstNum, values.op, disVal);
            display.innerHTML = values.firstNum;
        }
        values.op = op.innerHTML;
        values.waiting = true;
        op.classList.add("press");

        console.log(values)
    });
})

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    removePress();
    document.querySelector(".display-value").innerHTML = 0;
    values = {
        firstNum: 0,
        op: "",
        waiting: false
    }
    console.log(values);
});
