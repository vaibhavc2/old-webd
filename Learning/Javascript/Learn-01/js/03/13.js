let element = document.createElement("span");
element.id = "s5";
element.className = "nav-items main-color";
element.setAttribute('type', 'none');
// element.innerText = `CREATED`;
element.innerHTML = `<a href="#">CREATED</a>`;

let inText = document.createTextNode(" HELLO!!");
element.append(inText);
console.log(element);

let navbarContainer = document.querySelector("div#navbar"); // div with id="navbar"
// console.log(navbarContainer);
navbarContainer.appendChild(element);

// Difference between append & appendChild

// const parent = document.createElement('div');
// const child = document.createElement('p');
// // Appending Node Objects
// parent.append(child) // Works fine
// parent.appendChild(child) // Works fine
// // Appending DOMStrings
// parent.append('Hello world') // Works fine
// parent.appendChild('Hello world') // Throws error


const element2 = document.querySelector("section");

// following both do the same thing:

// element.replaceWith(element2.children[2]); // moves the img element to the position of the span element

element = document.getElementById('navbar');
element.replaceChild(element2.children[2], document.getElementById('s5')); // syntax: (newChild, childToBeReplaced)

// element.removeChild(document.getElementById('s1')); // removes the firstElementChild of element
element.removeChild(element.firstElementChild); // removes the firstElementChild of element

// element.remove(); // removes the entire selected element

const elementID = element.getAttribute('id');
element.removeAttribute('class');
const elementClass = element.getAttribute('class');
console.log(elementID, elementClass, element.hasAttribute('name'));