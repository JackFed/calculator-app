// Globals bad but for now
let operations = "";

let values = {
    a: 0,
    b: 0,
    op: "",
    opId: ""
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

function changeDisplay(value) {
    const display = document.querySelector(".display-value");
    const lastChar = operations.charAt(operations.length - 1);
    if( (value === "/") || (value === "*") || (value === "+") || (value === "-") ) {
        // IMPLEMENT: if there is already a operator, change it to the new one
        if( (lastChar === "/") || (lastChar === "*") || (lastChar === "+") || (lastChar === "-") ) {
            operations = operations.replace(lastChar, value);
        } else {
            operations = operations.concat(value);
        }
        console.log(`The operations: ${operations}`)
        display.innerHTML = setValues(display.innerHTML, value);
    } else if (value === "=") {
        display.innerHTML = setValues(display.innerHTML, value);
        operations = display.innerHTML;
    } else if (value === "C") {
        display.innerHTML = "0";
        // reset operation tracking
        values.a = 0;
        values.b = 0;
        values.op = "";
        operations = "";
    } else {
        display.innerHTML = display.innerHTML.concat(value);
        operations = display.innerHTML;
    }
    console.log(operations)
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        changeDisplay(number.innerHTML);
    });
})



const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (values.op !== op.innerHTML && values.op !== "") {
            document.querySelector(`#${values.opId}`).classList.remove("press");
        }
        values.op = op.innerHTML;
        values.opId = op.id;
        op.classList.add("press");
        
        console.log(values.op)
    });
})

// Get the values and the operator
// If it doesn't have any value for a, set a and the operator
// if it does, set the value of b, perform operate.
// Then set the new value of a to the result, and set the new operator to the give operator.
function setValues(value, operator) {
    let result = value;
    if (operator === "=") {
        console.log(values)
        result = operate(values.a, values.op, Number(value)).toFixed(3);
        values.a = result;
        values.op = "";
    } else if(values.a === 0) {
        values.a = Number(value);
        values.op = operator;
    } else {
        console.log(`Before equals: ${values}`);
        values.b = Number(value);
        result = operate(values.a, values.op, values.b).toFixed(3);
        values.a = result;
        values.op = operator;
    }

    console.log(values);
    return result
}

/*
    Design idea for applying calulation
    use an array with 3 elements
    take first numbers inputed and record when an operator is used (reset array when clear is used)
    when operator used, highlight operator, set first index to the number inputed and second to the operator
    after second number is made and another operator is used, perform operate(args)
    set new display to that number if 

*/