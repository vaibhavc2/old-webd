// e is the custom name of event object, could be event or anything else..
document.getElementById('navbar').addEventListener('click', function (e) {
    console.log('You have clicked on the Navigation Bar.');
    // location.href = "https://www.twitter.com";
    console.log(e);
    let clickTarget = e.target; // store the clicked element
    const clickTargetClassName = e.target.className;
    console.log(clickTarget);
    console.log(clickTargetClassName);
    console.log(e.target.classList);
    console.log(e.target.id);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.clientX); // acc to browser window
    console.log(e.clientY); // acc to browser window
    
})
document.querySelector('form').addEventListener('mouseover', function (e) {
    console.log('hovered over Google!');
    // location.href = "https://www.twitter.com";
    console.log(e);
    let hoverTarget = e.target; // store the hovered element
    const hoverTargetClassName = e.target.className;
    console.log(hoverTarget);
    console.log(hoverTargetClassName);
    console.log(e.target.classList);
    console.log(e.target.id);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.clientX); // acc to browser window
    console.log(e.clientY); // acc to browser window

})