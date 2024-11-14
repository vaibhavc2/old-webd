const addButton = document.getElementById("add-btn")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

addButton.addEventListener("click", () => {
    console.log(addNumbers(+input1.value, +input2.value));
});

function addNumbers(num1: number, num2: number) {
    return num1 + num2;
}