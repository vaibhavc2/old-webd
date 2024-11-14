let mathObject = Math; // new Math() is wrong since this object has no constructor
console.log(mathObject);
// in-built constants
console.log(mathObject.E); // e
console.log(mathObject.PI); // pi
console.log(mathObject.SQRT2); // sqr root of 2
const num = 6.78;
// lots of math functions
console.log(mathObject.round(num));
console.log(mathObject.cos(1.4));