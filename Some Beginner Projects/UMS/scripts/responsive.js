function displayMobileNavMenu(mobileMediaQuery) {
    if (mobileMediaQuery.matches) { // If media query matches
        containerFluidNavbar.innerHTML = /*html*/ `<a class="navbar-brand" href="index.html"><img src="dist/img/favicon-main.png" alt=""></a>
    <a class="navbar-brand" href="index.html" id="ums-img-link"><img src="dist/img/ums-favicon.png"
            alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <form class="d-flex" id="search-form">
        <input class="form-control me-2" type="search" placeholder="Search UMS" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <!-- <div id="dropdownSearch">
    </div> -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item dropdowns">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    TimeTable
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">View TimeTable</a></li>
                    <li><a class="dropdown-item" href="#">Attendance Status</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Assignments</a></li>
                    <li><a class="dropdown-item" href="#">Projects</a></li>
                    <li><a class="dropdown-item" href="#">Practicals</a></li>
                </ul>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">Examination System</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Academic Support</a></li>
                    <li><a class="dropdown-item" href="#">Exam Registration</a></li>
                    <li><a class="dropdown-item" href="#">Exam Attendance</a></li>
                    <li><a class="dropdown-item" href="#">Exam Seating Plan</a></li>
                    <li><a class="dropdown-item" href="#">OMR Sheet Scrutiny</a></li>
                    <li><a class="dropdown-item" href="#">Examination Results</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Application for Term-off</a></li>
                    <li><a class="dropdown-item" href="#">Certificate Request</a></li>
                    <li><a class="dropdown-item" href="#">Guidance Classes Polling</a></li>
                    <li><a class="dropdown-item" href="#">Parental Consent Form</a></li>
                    <li><a class="dropdown-item" href="#">Provisional Admit Card</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Backlogs</a></li>
                    <li><a class="dropdown-item" href="#">Online Transactions</a></li>
                </ul>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">Change Password</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Change UMS Password</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Change Internet Password</a></li>
                </ul>
                <li class="nav-item">
                    <a class="nav-link" href="login.html" style="text-decoration: underline; ">Log out</a>
                </li>
                <li>
                        <hr class="dropdown-divider" style="color: grey;">
                </li>
                <li class="nav-item">
                    <span style="font-size: small; color: white; display: inline-block; margin-left: 16px;">Not <u style="cursor: pointer;">Vaibhav Chopra</u>?</span>
                    <a class="nav-link" href="login.html">Log in</a>
                    <a class="nav-link" href="https://admit.lpu.in/">Sign up</a>
                </li>
            </li>
        </ul>
    </div>
    <div class="login-signup">
        <span style="color: rgb(148, 148, 148);">Not <u style="cursor: pointer;">Vaibhav Chopra</u>?</span>
        <button class="btn btn-outline-info bg-primary " type="submit" id="login" onclick = "window.location.href='login.html'; logoutFunction()">Log in</button>
        <button class="btn btn-outline-info bg-primary " type="submit" id="signup" onclick = "window.location.href='https:admit.lpu.in/'; logoutFunction()">Sign up</button>
    </div>`;
        // containerFluidNavbar.style.display = 'inline-block !important';
    } else {
        containerFluidNavbar.innerHTML = /*html*/ `<a class="navbar-brand" href="index.html"><img src="dist/img/favicon-main.png" alt=""></a>
    <a class="navbar-brand" href="index.html" id="ums-img-link"><img src="dist/img/ums-favicon.png"
            alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <form class="d-flex" id="search-form">
        <input class="form-control me-2" type="search" placeholder="Search UMS" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <!-- <div id="dropdownSearch">
    </div> -->
    <div class="login-signup">
        <span style="color: rgb(148, 148, 148);">Not <u style="cursor: pointer;">Vaibhav Chopra</u>?</span>
        <button class="btn btn-outline-info bg-primary " type="submit" id="login" onclick = "window.location.href='login.html'; logoutFunction()">Log in</button>
        <button class="btn btn-outline-info bg-primary " type="submit" id="signup" onclick = "window.location.href='https:admit.lpu.in/'; logoutFunction()">Sign up</button>
    </div>`;
    }
}

let mobileMediaQuery = window.matchMedia("(max-width: 991px)");
const containerFluidNavbar = document.querySelector('.container-fluid');
// const mobileNav = document.querySelector('#navbarSupportedContent');
displayMobileNavMenu(mobileMediaQuery); // Call listener function at run time
mobileMediaQuery.addEventListener("change", displayMobileNavMenu); // Attach listener function on state changes



// function displayDropDownSearch(searchMediaQuery) {
//     if (searchMediaQuery.matches) {
//         let searchStringHTML = /*html*/ `<a class="nav-link dropdown-toggle hidden-arrow btn btn-primary" href="#" id="navbarDropdownMenuLink" role="button"
//         data-mdb-toggle="dropdown" aria-expanded="false">
//         Search
//         </a>
//         <ul class="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdownMenuLink">
//             <li class="input-group-dropdown-item">
//                 <div class="input-group mt-2 mx-2">
//                     <div class="form-outline">
//                         <input type="search" id="form1" class="form-control-dropdown" />
//                         <label class="form-label" for="form1">Search</label>
//                     </div>
//                 </div>
//             </li>
//             <!-- <li><hr class="dropdown-divider"/></li> -->
//         </ul>`;
//         dropdownSearch.innerHTML = searchStringHTML;
//         dropdownSearch.style.display = "block !important";
//     }
//     else {
//         dropdownSearch.innerHTML = /*html*/ `<!--code-->`;
//         dropdownSearch.style.display = "none !important";
//     }
// }

// let searchMediaQuery = window.matchMedia("(max-width: 1520px)");
// const dropdownSearch = document.querySelector('#dropdownSearch');
// displayDropDownSearch(searchMediaQuery);
// searchMediaQuery.addEventListener("change", displayDropDownSearch);