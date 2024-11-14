// setInterval --> keeps running the function periodically after a set time period
// setInterval(() => {
//     console.log("HELLO");
// }, 2000);


// let intervalId = setInterval(() => {
//     console.log("HELLO");
// }, 2000);
// clearInterval(intervalId);



// the following way can be used to display live time in a website!
function displayTime() {
    let time = new Date();
    // console.log(time);
    document.getElementById('time').innerHTML = time;
}

setInterval(displayTime, 1000);