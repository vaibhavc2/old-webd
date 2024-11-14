// function birthdayWish(fullName, bye = 'Bye') {
//     console.log(`Happy Birthday ${fullName}! May all your Dreams come true & you achieve the Highest level of Humanity. God Bless You!
//                         ${bye}!`);
//     // return 10; // just trying to return something!
// }


function birthdayWish(fullName, bye = 'Bye') {
    let msg = `Happy Birthday ${fullName}! May all your Dreams come true & you achieve the Highest level of Humanity. God Bless You!
                        ${bye}!`;
    return msg;
}

// another format to make a function using a variable
const greeting = function (fullName, bye = 'Bye') {
    let msg = `Happy Birthday ${fullName}! May all your Dreams come true & you achieve the Highest level of Humanity. God Bless You!
                        ${bye}!`;
    return msg;
}

class peopleWish {
    constructor() {
        // function wish() {
        // }
        let p1 = "Vaibhav Chopra";
        let p2 = "Karan Sharma";
        let p3 = "Amit Rastogi";
        let w1 = birthdayWish(p1, 'Good Bye, Take Care');
        console.log(w1);
        let w2 = birthdayWish(p2);
        console.log(w2);
        // let w3 = birthdayWish(p3, 'BYE');
        // console.log(w3);
        let w3 = greeting(p3, 'BYE');
        console.log(w3);
    }
}

class Program {
    // function; main() {
    static main() {
        // let wish1 = new peopleWish;
        // let wish2 = new peopleWish;
        // let wish3 = new peopleWish;
        // wish1.wish;

        const person1 = {
            name: "Gamer",
            game: function () {
                return "GTA";
            }
        }
        console.log(person1.game());
        // console.log(person1);

        let arr = new Array;
        arr = ['sales', 'marketing'];

        arr.forEach(function(element, index, array) {
            console.log(index, element);
        });
    }
}

{
    // let MAIN = new Program;
    // MAIN.main();

    Program.main();
}