// function mainFunction(num1, num2) {
//     return num1 + num2;
// }


// arrow function
// with arrow function, the above function can be written like:

// let mainFunction = (num1, num2) => (num1 + num2);
// console.log(mainFunction(56, 78));

// let halfNumber = num => num / 2;
// console.log(halfNumber(5));

// let greetFunction = () => console.log("Good Morning!");
// greetFunction();


let obj = {
    greeting: "Good Morning",
    names: ["Vaibhav", "Ajay", "YsBnda"],
    speak() {
        this.names.forEach(student => {
            console.log(this.greeting, student); // arrow function takes 'this' as the pointer to its parent: called Lexical 'this'
        });
        // this.names.forEach(function spkFn(student) {
        //     console.log(this.greeting, student); // but the function considers 'this' as the pointer to its own properties!
        //     // console.log(obj.greeting, student);
        // })
    }
}
obj.speak();