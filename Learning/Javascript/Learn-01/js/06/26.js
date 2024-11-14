// class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    walk() {
        return `${this.firstName} ${this.lastName} is walking.`;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate an object
const person1 = new Person("VC", "King", "23-05-2001");
console.log(person1.getFullName());
console.log(person1.walk());