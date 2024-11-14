// const ADMIN = 0;
// const AUTHOR = 1;
// const PLAYER = 2;
// ENUM:

// enum role { ADMIN, AUTHOR, PLAYER };
enum Role { ADMIN = 0, AUTHOR = 1, PLAYER = 2 };

const person = {
    name: 'Vaibhav Chopra',
    age: 20,
    hobbies: ['gym', 'web-development'],
    // role: [2, 'author']
    role: Role.AUTHOR
};

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // defining a tuple
// } = {
//     name: 'Vaibhav Chopra',
//     age: 20,
//     hobbies: ['gym', 'web-development'],
//     role: [2, 'author']
// };


// let favActivities: string[];
// favActivities = ['gym'];
// favActivities = ['cricket'];
// console.log(favActivities);

// const anotherPerson: {
//     name: string;
//     age: number;
// } = {
//     name: 'Vaibhav Chopra',
//     age: 20
// };

// Bad idea: it just tells ts that there is some object.
// const somePerson: object = {
//     name: 'Vaibhav Chopra',
//     age: 20
// }

// person.role.push('admin'); // this still works with tuples unfortunately.
// person.role[1] = 12; // this is error in tuple!
// person.role = [0, 'admin', 'co-admin']; // this is error in tuple!

console.log(person.role);

// Array.from(person.hobbies).forEach(hobby => {
//     // console.log(hobby.map()); //ERROR because map() is array function, not string function!
//     console.log(hobby.toLowerCase());
// });

person.hobbies.forEach(hobby => {
    console.log(hobby.toUpperCase());
});

for (const hobby of person.hobbies) {
    // console.log(hobby.map()); //ERROR because map() is array function, not string function!
    console.log(hobby.toLowerCase());
}

console.log(person);
console.log(person.name);
// console.log(person.hobbies[1]);

// console.log(anotherPerson.name);
// console.log(somePerson);

// console.log(somePerson.name); // ERROR, bcz of no specification, and no auto-inference of ts