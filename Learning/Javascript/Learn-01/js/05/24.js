const x = '99';

// === also checks the data type just like == does that by default in other languages like c++ and java
if (x === 99) {
    console.log(0);
}
else if (x == 99) {
    console.log(x);
}

const color = x <= 100 ? 'red' : 'blue';
console.log(color);

const mainFunction = (num1 = 5, num2 = 7) => num1 + num2;