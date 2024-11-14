let btnElement = document.querySelector('button');
// btnElement.addEventListener("click", submitFunction);
// btnElement.addEventListener("dblclick", submitFunction2);
// btnElement.addEventListener("mousedown", submitFunction3); // mousedown: click, rightclick, mousewheelclick
// btnElement.addEventListener("mouseenter", submitFunction4);
// btnElement.addEventListener("mouseleave", submitFunction5);
// btnElement.addEventListener("mousemove", submitFunction6);
btnElement.addEventListener("mouseover", submitFunction7);

function submitFunction(e) {
    // console.log("Data Collected. Thanks!");
    e.preventDefault(); // to prevent the default action of the button in form to sumbit data in the given backend (in action attribute)
}
function submitFunction2(e) {
    console.log("Data Collected (DOUBLE CLICKED)");
}
function submitFunction3(e) {
    // console.log("This is mousedown.");
}
function submitFunction4(e) {
    console.log("mouseEnter");
}
function submitFunction5(e) {
    console.log("mouseLeave");
}
function submitFunction6(e) {
    console.log("mouseMove");
    btnElement.style.backgroundColor = 'yellow';
}
function submitFunction7(e) {
    console.log("mouseOver");
}