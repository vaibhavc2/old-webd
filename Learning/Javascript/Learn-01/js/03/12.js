let cont = document.querySelector(".container");
// console.log(cont.childNodes); // .childNodes gives array obj of all direct childs
// .childNodes includes new line as text! It takes comment as a comment separately!
console.log(cont.children); // this only gives array obj of the direct child elements

let node_Name = cont.childNodes[1].nodeName;
console.log(node_Name);

let node_Type = cont.childNodes[1].nodeType; 
//  nodeName - nodeType
/*
    element - 1
    attribute - 2
    text node - 3
    comment - 8
    document - 9
    doctype - 10
*/
console.log(node_Type);

let body = document.querySelector("body");
console.log(body.children[2].children[0].children);
console.log(body.firstChild); // gives the childNode[0]
console.log(body.firstElementChild); // gives the children[0]
console.log(body.lastChild);
console.log(body.lastElementChild);
console.log(body.children[2].childElementCount); // no of child elements
console.log(body.firstElementChild.firstElementChild.parentNode);
console.log(body.firstElementChild.firstElementChild.parentElement);
console.log(document.documentElement); // this gives the html tag & everything it includes
// in this case there is a difference between parentNode & parentElement: parentNode returns #document but parentElement returns null.
console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement);
console.log(body.firstElementChild.nextSibling); // next line enter is considered as #text
console.log(body.firstElementChild.nextElementSibling);