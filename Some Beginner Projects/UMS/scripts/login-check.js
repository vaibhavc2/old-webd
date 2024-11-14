// To redirect to Login Page just once for that user


let isLoggedIn = window.localStorage.getItem("isLoggedIn");

$(function () {
    if (isLoggedIn !== "true") {
        // document.body.style.display = 'none !important';
        window.location.replace("login.html");

        // mark this in localStorage
        window.localStorage.setItem("isLoggedIn", "true");
    } //if not found in localStorage
    else {
        // document.body.style.display = 'block !important';
    }
});

const logoutFunction = () => {
    window.localStorage.setItem("isLoggedIn", "false");
}