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

    if (operator = '+') {
        add(Number(num1), Number(num2))
    }

    if (operator = '-') {
        subtract(Number(num1), Number(num2))
    }

    if (operator = '*') {
        multiply(Number(num1), Number(num2))
    }

    if (operator = '/') {
        divide(Number(num1), Number(num2))
    }

}

const screenText = document.querySelector("p")

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
    console.log("zero")
})
oneBut.addEventListener("click", () => {
    console.log("one")
})
twoBut.addEventListener("click", () => {
    console.log("two")
})
threeBut.addEventListener("click", () => {
    console.log("three")
})
fourBut.addEventListener("click", () => {
    console.log("four")
})
fiveBut.addEventListener("click", () => {
    console.log("five")
})
sixBut.addEventListener("click", () => {
    console.log("six")
})
sevenBut.addEventListener("click", () => {
    console.log("seven")
})
eightBut.addEventListener("click", () => {
    console.log("eight")
})
nineBut.addEventListener("click", () => {
    console.log("nine")
})

// operator event listeners
divideBut.addEventListener("click", () => {
    console.log("divide")
})
timesBut.addEventListener("click", () => {
    console.log("times")
})
minusBut.addEventListener("click", () => {
    console.log("minus")
})
plusBut.addEventListener("click", () => {
    console.log("plus")
})

equalsBut.addEventListener("click", () => {
    console.log("equals")
})

clearBut.addEventListener("click", () => {
    console.log("clear")
})