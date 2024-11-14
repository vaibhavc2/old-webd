const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.firstElementChild.innerHTML = '<strong> HELLO </strong>';


const btn = document.querySelector('.btn');
// btn.style.background = 'red';
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target.className);
    // console.log(e.target.id);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = "<h1>great</h1>";
});