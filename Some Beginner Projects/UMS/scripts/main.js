// const searchInputDropdown = document.getElementById('dropdownSearch');
// const dropdownOptions = document.querySelectorAll('.input-group-dropdown-item');


// searchInputDropdown.addEventListener("input", () => {
//     const filter = searchInputDropdown.value.toLowerCase();
//     showOptions();
//     const valueExist = !!filter.length;

//     if (valueExist) {
//         dropdownOptions.forEach((el) => {
//             const elText = el.textContent.trim().toLowerCase();
//             const isIncluded = elText.includes(filter);
//             if (!isIncluded) {
//                 el.style.display = 'none';
//             }
//         });
//     }
// });

// const showOptions = () => {
//   dropdownOptions.forEach((el) => {
//     el.style.display = 'flex !important';
//   })
// }

// $(document).ready(function () {
//     $('#timetable-render').load("timetable.html");
// });

function load_home() {
    document.getElementById("timetable-render").innerHTML='<object type="text/html" data="/timetable.html" height="320px" style="border-radius: 6px;"></object>';
}

load_home();