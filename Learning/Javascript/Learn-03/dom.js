const header = document.getElementById('main-header');
header.style.borderBottom = '4.5px solid red';

// let items = document.getElementsByClassName('list-group-item');

// console.log(items);

// items[0].textContent = 'This is a JS-edited item!';
// items[0].style.fontWeight = 'bold';

// for (let i = 0; i < Array.from(items).length; i++) {
//     const e = Array.from(items)[i];
//     e.style.backgroundColor = 'pink';
// }

let li = document.getElementsByTagName('li');

console.log(li);

li[4].textContent = 'This is a JS-edited item!';
li[4].style.fontWeight = 'bold';

for (let i = 0; i < Array.from(li).length; i++) {
    const e = Array.from(li)[i];
    e.style.backgroundColor = 'pink';
}

let firstContainer = document.querySelector('.container');
const containers = document.querySelectorAll('.container');

for (let i = 0; i < Array.from(containers).length; i++) {
    const element = Array.from(containers)[i];
    element.style.color = 'orange';
}

firstContainer.style.color = 'white';

// const firstInput = document.querySelector('input');
const inputs = document.querySelectorAll('input');
inputs[0].style.flex = '-10';
inputs[1].innerHTML = `<span> main </span>
`