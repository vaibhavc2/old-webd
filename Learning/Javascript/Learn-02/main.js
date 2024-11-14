// single element
const form = document.getElementById('my-form');
const container = window.document.querySelector('.container'); // document is actually a sub-object of window object
const h1 = document.querySelector('h1');

// multiple elements
const items = document.querySelectorAll('.item'); // returns a NodeList (can also run array methods on it). This is the preferred way.
const itemsCollection = document.getElementsByClassName('item'); // returns a HTML Collection (can't run array methods on it)
const li = document.getElementsByTagName('li'); // returns a HTML Collection (can't run array methods on it)

console.log(items);