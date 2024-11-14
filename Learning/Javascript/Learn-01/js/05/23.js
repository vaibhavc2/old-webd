const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Do some exercise in the Gym',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Go out and talk to customers',
        isCompleted: true
    }
];

// console.log(todos);
console.log(todos[1].text, todos[1].isCompleted);

const JSONtodos = JSON.stringify(todos);
console.log(JSONtodos);

todos.forEach(function(element) {
    console.log(element);
})

const todoText = todos.map(function(element) {
    return element.text; // map returns array members, hence the full loop gives an array.
})

console.log(todoText);

const todoCompleted = todos.filter(function(element) {
    return element.isCompleted === true; // it returns the objects which fulfil the given condition
})

const todoCompleted_textOnly = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(element) {
    return element.text;
});

console.log(todoCompleted);
console.log(todoCompleted_textOnly);