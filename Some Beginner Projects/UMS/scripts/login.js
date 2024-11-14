$(document).ready(function () {
    $('#loginModal').modal('show');
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});

// required();

setTimeout(required, 100);

let empty1 = document.forms["form1"]["text1"].value;
let empty2 = document.forms["form2"]["password1"].value;

function required() {
    if (empty1 === "" || empty2 === "") {
        alert("The following fields are *required* to be filled.");
        return false;
    }
    else {
        return true;
    }
}

// const loginButton = () => {
//     if(empty1 !== "" && empty2 !== "") {
//         loginBtn.setAttribute('onclick') = "window.location.href='index.html'";
//     }
// }

const logInFunction = () => {
    window.localStorage.setItem("isLoggedIn", "true");
}

const loginBtn = document.getElementById('login-btn');

function inputSuccess() {
    if (document.getElementById("passwd").value !== "" && document.getElementById("ums-id").value !== "") {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
        // required();
    }
}

// function inputSuccess() {
//     if (document.getElementById("passwd").value === "" && document.getElementById("ums-id").value === "") {
//         loginBtn.disabled = true;
//     } else {
//         loginBtn.disabled = false;
//     }
// }

// function verify() {
//     let myText = document.
//     if (myText is empty){
//         alert "Put some text in there!"
//         return
//     }
//     else{
//         do button functionality
//     }
// }

// const stayLoggedIn = () => {
//     if(document.getElementById('stay-logged-in').checked) {
//         logInFunction();
//     }
//     else {

//     }
// }