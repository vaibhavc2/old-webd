// let str = "hello"; // string
// console.log(typeof (str));

// // int & float are clubbed into 'number' data-type
// let a = 25;
// console.log(typeof (a));
// let b = 25.59;
// console.log(typeof (b));

// let city; // undefined
// console.log(typeof (city));
// console.log(typeof city); // different way of writing the above line to get the same result

// let isThief = false; // boolean
// console.log(typeof isThief);

// let nullVar = null;
// console.log(typeof nullVar); // js shows the data-type of null as 'object' but it is actually a primitive data-type 'null'

// // Reference Data types

// // array
// let arr = [1, "vChopra", 4.5, null, false, 'abc'];
// console.log(arr);
// console.log(typeof arr);

// //object literals
// let stdMarks = {
//     Vaibhav: 87,
//     Harry: 73,
//     Patrick: 55,
//     Sandeep: 44
// };
// console.log(typeof stdMarks);
// console.log(stdMarks);


// // functions
// function printNumber(n) {
//     console.log(n);
// }

// let variable = 3;
// printNumber(variable);



// date
// let date = new Date();
// console.log(date, (typeof date))

let mainTime = new Date(0); // gives the reference date,time
mainTime = new Date(2000); // gives the date & time after 2s(2000ms) from the reference
// new Date(year, month, day/date, hrs, mins, secs, millisecs)
mainTime = new Date(2050, 04, 23, 7, 15, 00, 500);
console.log(mainTime);

let year = mainTime.getFullYear();
console.log(year);

let month = mainTime.getMonth(); // the months in js start from 00 - Jan => 04 - May;
console.log(month);

let dt = mainTime.getDate(); // day
console.log(dt);

let day = mainTime.getDay();
console.log(day);

let hours = mainTime.getHours();
console.log(hours);

let minutes = mainTime.getMinutes();
console.log(minutes);

mainTime.setDate(2); // sets the day/date part of the date-time, here 02 may
console.log(mainTime);
mainTime.setDate(32); // 01 june
console.log(mainTime);

console.log(Date.now()); // tells the no. of milliseconds from the reference date till now!