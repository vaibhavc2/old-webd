let btn = document.getElementById('btn');
btn.addEventListener('click', toggleHide);

function toggleHide(e) {
    e.preventDefault();
    alert('Virus');
    let form = document.querySelector("form").firstElementChild;
    if (form.style.display != 'none') {
        form.style.display = 'none';
    }
    else {
        form.style.display = 'inline-block';
    }
}