function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

let num1 = ''
let num2 = ''
let operator = ''

function operate(num1, num2, operator) {
    num1 = Number(num1)
    num2 = Number(num2)
    if (operator == '+') {
        return add(Number(num1), Number(num2))
    }

    if (operator == '-') {
        return subtract(Number(num1), Number(num2))
    }

    if (operator == '*') {
        return multiply(Number(num1), Number(num2))
    }

    if (operator == '/') {
        return divide(Number(num1), Number(num2))
    }

}

const screenText = document.querySelector("p")
let currentScreenText = screenText.textContent
text = ''
function changeScreen(text) {
    screenText.textContent = text
}

// Number button vars
const zeroBut = document.querySelector(".zero")
const oneBut = document.querySelector(".one")
const twoBut = document.querySelector(".two")
const threeBut = document.querySelector(".three")
const fourBut = document.querySelector(".four")
const fiveBut = document.querySelector(".five")
const sixBut = document.querySelector(".six")
const sevenBut = document.querySelector(".seven")
const eightBut = document.querySelector(".eight")
const nineBut = document.querySelector(".nine")

// Operator button vars
const divideBut = document.querySelector(".divide")
const timesBut = document.querySelector(".times")
const minusBut = document.querySelector(".minus")
const plusBut = document.querySelector(".plus")

const equalsBut = document.querySelector(".equals")

const clearBut = document.querySelector(".c")

// number event listeners
zeroBut.addEventListener("click", () => {
    text += "0"
    changeScreen(text)

    currentScreenText = screenText.textContent
    if (currentScreenText.includes("/" || "*" || "+" || "-")) {
        num2 = String(num2)
        num2 += '0'
        console.log("hi")
    }
    else {
        num2 = String(num2)
        num1 += '0'
        console.log("bye")
    }
})
oneBut.addEventListener("click", () => {
    text += "1"
    changeScreen(text)

    currentScreenText = screenText.textContent
    if (currentScreenText.includes("/" || "*" || "+" || "-")) {
        num2 = String(num2)
        num2 += '1'
        console.log("hi")
    }
    else {
        num2 = String(num2)
        num1 += '1'
        console.log("bye")
    }
})
twoBut.addEventListener("click", () => {
    text += "2"
    changeScreen(text)
    
    currentScreenText = screenText.textContent
    if (currentScreenText.includes("/" || "*" || "+" || "-")) {
        num2 += 2
    }
    else {
        num1 += 2
    }

})
threeBut.addEventListener("click", () => {
    text += "3"
    changeScreen(text)

    currentScreenText = screenText.textContent
    if (currentScreenText.includes("/" || "*" || "+" || "-")) {
        num2 = String(num2)
        num2 += '3'
        console.log("hi")
    }
    else {
        num2 = String(num2)
        num1 += '3'
        console.log("bye")
    }
})
fourBut.addEventListener("click", () => {
    text += "4"
    changeScreen(text)

    currentScreenText = screenText.textContent
    if (currentScreenText.includes("/" || "*" || "+" || "-")) {
        num2 = String(num2)
        num2 += '4'
        console.log("hi")
    }
    else {
        num2 = String(num2)
        num1 += '4'
        console.log("bye")
    }
})
fiveBut.addEventListener("click", () => {
    text += "5"
    changeScreen(text)

    currentScreenText = screenText.textContent
    if (currentScreenText.includes("/" || "*" || "+" || "-")) {
        num2 = String(num2)
        num2 += '5'
        console.log("hi")
    }
    else {
        num2 = String(num2)
        num1 += '5'
        console.log("bye")
    }
})
sixBut.addEventListener("click", () => {
    text += "6"
    changeScreen(text)

    currentScreenText = screenText.textContent
    if (currentScreenText.includes("/" || "*" || "+" || "-")) {
        num2 = String(num2)
        num2 += '6'
        console.log("hi")
    }
    else {
        num2 = String(num2)
        num1 += '6'
        console.log("bye")
    }
})
sevenBut.addEventListener("click", () => {
    text += "7"
    changeScreen(text)

    currentScreenText = screenText.textContent
    if (currentScreenText.includes("/" || "*" || "+" || "-")) {
        num2 = String(num2)
        num2 += '7'
        console.log("hi")
    }
    else {
        num2 = String(num2)
        num1 += '7'
        console.log("bye")
    }
})
eightBut.addEventListener("click", () => {
    text += "8"
    changeScreen(text)

    currentScreenText = screenText.textContent
    if (currentScreenText.includes("/" || "*" || "+" || "-")) {
        num2 = String(num2)
        num2 += '8'
        console.log("hi")
    }
    else {
        num2 = String(num2)
        num1 += '8'
        console.log("bye")
    }
})
nineBut.addEventListener("click", () => {
    text += "9"
    changeScreen(text)

    currentScreenText = screenText.textContent
    if (currentScreenText.includes("/" || "*" || "+" || "-")) {
        num2 = String(num2)
        num2 += '9'
        console.log("hi")
    }
    else {
        num2 = String(num2)
        num1 += '9'
        console.log("bye")
    }
})

// operator event listeners
divideBut.addEventListener("click", () => {
    text += " / "
    changeScreen(text)

    operator = '/'
})
timesBut.addEventListener("click", () => {
    text += " * "
    changeScreen(text)

    operator = '*'
})
minusBut.addEventListener("click", () => {
    text += " - "
    changeScreen(text)

    operator = '-'
})
plusBut.addEventListener("click", () => {
    text += " + "
    changeScreen(text)

    operator = '+'
})

equalsBut.addEventListener("click", () => {
    console.log("equals")

    num1 = Number(num1)
    num2 = Number(num2)
    text = operate(num1, num2, operator)
    changeScreen(text)

    num1 = text
    num2 = ''
    operator = ''
})

clearBut.addEventListener("click", () => {
    console.log("clear")
    num1 = ''
    num2 = ''
    text = ''
    changeScreen(text)
})

