let str;
str = `<div id="navbar"></div>` + `<p>Hello World</p>`;
str = str.concat(`<section class="main">`, `</section>`)
console.log(str);
console.log(str.length); // length is a property, but others are methods
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str[5]);
// console.log(str.indexOf('"navbar'));
// console.log(str.lastIndexOf('"navbar')); //last occurring
// console.log(str.indexOf('<'));
// console.log(str.lastIndexOf('<'));
// console.log(str.charAt(8));
// console.log(str.endsWith("VC")); // returns boolean
// console.log(str.endsWith(">"));
// console.log(str.includes("hello"));
// console.log((str.toLowerCase()).includes("hello"));

// console.log(str.substring(0, 10));
// console.log(str.substring(5, 16));
// console.log(str.slice(5, 16));
// console.log(str.slice(-4)); // returns the last 4 characters of the string

// console.log(str.split(" ")); // makes it an object & splits at every mentioned string-part, i.e. space here
// console.log(typeof str.split(" "));
// console.log(str.split(">"));

// console.log(str.replace('Hello World', 'Vaibhav Chopra'));

// let Name = 'Vaibhav';
// let myString = `Hello ${Name}
//     Lala is Cool.
//         yay!!
// ${str}
// `;
// console.log(myString);