// single element selectors


// let selectedElement = document.getElementById('s4');
// selectedElement = document.getElementById('navbar').childNodes;
// selectedElement = document.getElementById('navbar').childNodes.length;
// selectedElement = document.getElementById('s2').parentNode;
// selectedElement = selectedElement.className;

// selectedElement.style.color = "red";
// selectedElement.firstChild.style.color = "red";
// selectedElement.firstChild.innerText = "The Best Company";
// selectedElement.lastChild.innerText = "The Best Company"; // it overwrites the text written inside the selected tag/element
// selectedElement.firstChild.innerHTML = "<strong>The Best Company</strong>";
// selectedElement.innerHTML = "Contact Us";
// console.log(selectedElement);
// console.log(selectedElement.innerHTML);

// let element = document.querySelector('#s2'); // selects id = "s2"
// element = document.querySelector('.main-color'); // selects the first encountered element with class = "main-color"
// element = document.querySelector('a'); // selects the first encountered element with tag name = "a"
// element = document.querySelector('section'); // selects the element with tag name = "section"



// multi-element selector


let multiElements = document.getElementsByClassName('main-color');
// multiElements = document.getElementsByClassName('nav-items');
// multiElements = document.getElementsByClassName('main-color nav-items'); // we can specific elements by using multiple classes, so elements having multiple mentioned classes get selected
// multiElements = document.getElementsByClassName('nav-items');
// console.log(multiElements[3].getElementsByClassName('links')); // [3] selects the 4th element, & then it's direct children with class = "links" are selected

multiElements = document.getElementsByTagName('a'); // all elements with tag name "span"

// Array.from(multiElements).forEach(element => {
//     element.style.color = "green";
// });

// alternate of forEach loop: (no need to convert to array!)
// for (let i = 0; i < multiElements.length; i++) {
//     const element = multiElements[i];
//     element.style.color = "green";
// }

multiElements = document.getElementsByName('main-form'); // it targets the tags/elements with the name attribute, e.g. here, name = "fLink"

console.log(multiElements);
