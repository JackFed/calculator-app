// Globals bad but for now
let displayValue = "";

let values = {
    a: 0,
    b: 0,
    op: ""
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
    }
}

function changeDisplay(button, value) {
    const display = document.querySelector(".display-value");

    if (display.innerHTML === "0") {
        display.innerHTML = value;
        displayValue = value;
    } else if( (value === "/") || (value === "*") || (value === "+") || (value === "-") ) {
        setValues(display.innerHTML, value);
    } else if (value === "C") {
        display.innerHTML = "0";
        // reset operation tracking
        values.a = 0;
        values.b = 0;
        values.op = "";
    } else {
        display.innerHTML = display.innerHTML.concat(value);
        displayValue = display.innerHTML;
    }

}

function highlightOperator () {
    return;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        changeDisplay(button, button.innerHTML);
    });
})

// Get the values and the operator
// If it doesn't have any value for a, set a and the operator
// if it does, set the value of b, perform operate.
// Then set the new value of a to the result, and set the new operator to the give operator.
function setValues(value, operator) {
    if(values.a === 0) {
        values.a = Number(value);
        values.op = operator;
    } else if (operator === "=") {
        values.b = Number(value);
        const result = operate(values.a, values. op, values.b);
    } else {
        values.b = Number(value);
        const result = operate(values.a, values. op, values.b);
        values.a = result;
        values.op = operator;
    }
    console.log(values);
}

/*
    Design idea for applying calulation
    use an array with 3 elements
    take first numbers inputed and record when an operator is used (reset array when clear is used)
    when operator used, highlight operator, set first index to the number inputed and second to the operator
    after second number is made and another operator is used, perform operate(args)
    set new display to that number if 

*/