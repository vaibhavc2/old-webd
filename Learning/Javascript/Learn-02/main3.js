const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(element) {
    element.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter a value in all the fields.');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter a value in all the fields.';

        setTimeout(() => msg.remove(), 3000);
    }
    else  {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
        
        alert('Successfully Submitted.');
    }
}