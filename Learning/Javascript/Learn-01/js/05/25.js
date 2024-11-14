// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    // this.walk = () => console.log(this.firstName, this.lastName, "is walking.");
    // this.getFullName = () => `${this.firstName} ${this.lastName}`;
}

// better way to have member functions
Person.prototype.walk = () => console.log(this.firstName, this.lastName, 'is walking.');

Person.prototype.getFullName = () => `${this.firstName} ${this.lastName}`;

// Instantiate an object
const person1 = new Person("Vaibhav", "Chopra", "23-05-2001");

console.log(person1);
console.log(person1.dob);

console.log(person1.getFullName());
person1.walk();