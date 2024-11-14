let age = 19;
if (age == 50) {
    console.log("GREAT");
}
else if (age < 50) {
    console.log("nice");
}
else if (age != 20) {
    console.log("oops");
}

let option = 'a';
switch (option) {
    case 'a':
        console.log("a");
        break;
    case 'b':
        console.log("b");
        break;
    case 'c':
        console.log("c");
        break;
    default:
        console.log("oops");
        break;
}

for (let index = 0; index < 5; index++) {
    const element = "sgdjijgiehrghewjrge";
    console.log(element);
}

const arr = [1, 2, 3, 4, 100];
arr.forEach(function(element) {
    console.log(element);
})

console.log("\n");

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

{
    let person = {
        Name: "Arnav",
        role: "Hacker",
        os: "Kali Linux"
    }
    for(let key in person) {
        // console.log(key + ': ' + person[key]);
        console.log(`The ${key} of the person is ${person[key]}.`);
    }
}