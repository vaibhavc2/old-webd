// setTimeout --> runs the function once after an interval of time

// setTimeout((name, otherText) => {
//     console.log("Hello, Good Morning!", name, ", have a nice day.");
// }, 5000); // time is in milliseconds, 5000ms = 5s

function greet(name, otherText)
{
    console.log("Hello, Good Morning!", name, otherText);
}
timeOut = setTimeout(greet, 5000, "Vaibhav", ", have a nice day.");
// name of the function: greet not greet()
// third onwards, the args. are the parameter args. of the function
console.log(timeOut); // setTimeout returns a unique id of itself
// clearTimeout(timeOut); // we can run this in a condition like if a particular task has been already performed by the user, then we don't want to show him a popup to do the same thing
let boolVar = true;
boolVar = false;
if (boolVar) {
    clearTimeout(timeOut); // if the value is true, then it clears the setTimeout
}
// clearTimeout --> helps to clear the setTimeout function, generally used with a condition in a certain scenario