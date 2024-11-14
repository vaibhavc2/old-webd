"use strict";
const addButton = document.getElementById("add-btn");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
addButton.addEventListener("click", () => {
    console.log(addNumbers(+input1.value, +input2.value));
});
function addNumbers(num1, num2) {
    return num1 + num2;
}
