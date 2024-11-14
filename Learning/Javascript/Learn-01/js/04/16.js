// web crawler code run in a website, here tested on codewithharry.com

let str = 'python';
const links = document.links;
// console.log(links);
// let href;
Array.from(links).forEach(element => {
    // href = element.href;

    // if (element.href.includes(str)) {
    //     console.log(element.href);
    // }
    if (element.parentElement.innerHTML.includes(str)) {
        console.log(element.href);
        console.log(element.parentElement);
    }
});