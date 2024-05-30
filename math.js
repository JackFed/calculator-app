// Globals bad but for now
let values = {
    firstNum: 0,
    op: "",
    opId: "",
    waiting: false,
    equals: false
}

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
        return "WHAT ARE YOU DOING? NO / BY 0!!!"
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
            return b;
    }
}

function addDigit(oldNum, newD) {
    if (oldNum === 0) {
        return newD;
    }
    return oldNum * 10 + newD;
}

function changeDisplay(value) {
    const display = document.querySelector(".display-value");
    const digit = Number(value);
    // If an operator is waitng on a new number
    if(values.waiting) {
        values.firstNum = Number(display.innerHTML);
        display.innerHTML = digit;
        values.waiting = false;
    } else {
        display.innerHTML = addDigit(display.innerHTML, digit);
    }
}

function checkExpression() {
    if (values.op !== "" && values.waiting) {

    }
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
        // If there is already an operator selected, perform the operation.
        if (values.op !== "") {
            document.querySelector(`#${values.opId}`).classList.remove("press");
            const display = document.querySelector(".display-value");
            disVal = Number(display.innerHTML);
            values.firstNum = operate(values.firstNum, values.op, disVal);
            display.innerHTML = values.firstNum;
        }
        // Update operation values
        values.op = op.innerHTML;
        values.opId = op.id;
        values.waiting = true;
        op.classList.add("press");
        console.log(values)
    });
})

const equal = document.querySelector(".equals");
equal.addEventListener("click", () => {
    return 0;
});
