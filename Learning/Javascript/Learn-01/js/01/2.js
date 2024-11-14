// console.log("Vaibhav Chopra")
var f_name;
fName = "Vaibhav";
// console.log(f_name);
var lName = `Chopra's`; // ', ", `, can be used to enclose strings in js
console.log(fName + " " + lName + " " + "Company");
console.log(fName, lName, "Company"); // better way to do the same thing done by the above line
const personalBrand = "entrepreneur"; // thisvariable can't be changed & must be set at declaration
// const a;
// a = 7;
console.log(personalBrand);

// keyword 'let' has block level scope, but var has global scope. so in modern js, we use let to initialise variables generally

if (true) {
    let age = 19;
    console.log(age);
    age = 20;
    console.log(age);
}
// console.log(age); //ERROR
const arr = [1, 2, 3, 4, 5];
arr.push(6); // push function can help to push to a const array
console.log(arr);