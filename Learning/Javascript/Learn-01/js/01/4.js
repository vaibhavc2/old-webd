// type conversion, coersion

let str = "true";
if (Boolean(str)) {
    console.log(str);
}

let age = String(19);
console.log(typeof age)

let arr = String([1, 2, 3, 4, 5]);
console.log(arr, "\n" + arr.length, "\n" + typeof arr); // here we have used the length function of String
arr = [1, 2, 3, 4, 5];
console.log(arr, arr.length, typeof arr); // here we have used the length function of array(object)

let i = 10;
console.log(i.toString()); // this also converts the data-type to String

let x = "55";
// console.log(x.toNumber()); ERROR, this function is not valid
console.log(Number(x));

let str_ = Number("97");
console.log(str_);
str_ = Number("dkf45564"); // this returns NAN: Not A Number, but NOT ERROR
console.log(str_);
str_ = Number(arr); // this also returns NAN: Not A Number, but NOT ERROR
console.log(str_);
str_ = Number(true); // 1
console.log(str_);
str_ = Number(false); // 0
console.log(str_);
str_ = parseInt(45.98); //data-type is 'number' but it is treated like 'int'
console.log(str_);
str_ = parseFloat(45); //data-type is 'number' but it is treated like 'float'
console.log(str_);
str_ = parseFloat(45.98);
console.log(str_);
str_ = parseFloat(45.98);
console.log(str_.toFixed(15));


let myStringNumber = "69";
let myRealNumber = 45;
console.log((myRealNumber + Number(myStringNumber)));