let a = document;
a = document.getElementsByTagName('*');
a = document.getElementsByTagName('div');
a = document.getElementById('navbar');
a = document.body; // body tag
a = document.forms; // form tag
a = document.forms[0]; // 1st form tag (element)
a = document.links;
a = document.links[0];
a = document.links[0].href;
a = document.links[2];
a = document.images;
a = document.images[0];
a = document.images[1].alt;
a = document.images[2].src;
a = document.scripts;
a = document.scripts[0];
a = document.scripts[0].type;

console.log(a);



// let htmlArray = document;
// htmlArray = document.getElementsByTagName('*');

// // create array using a, & then printing it:

// Array.from(htmlArray).forEach(function(element){
//     console.log(element);
// })
// console.log(htmlArray);