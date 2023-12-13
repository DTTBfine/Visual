var phonenumber = document.querySelector('#Phonenumber');
var email = document.querySelector('#Email');
var username = document.querySelector('#Username');
var password = document.querySelector('#Password'); 
var confirmPassword = document.querySelector('#confirmPassword');
var role = document.querySelector('#Role');
var form = document.querySelector('form');


function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isEmptyError = false
    listInput.forEach(input => {
        input.value = input.value.trim();

        if (!input.value) {
            isEmptyError = true
            showError(input, 'Không được để trống');
        } else {
            showSuccess(input);
        }
    });

    return isEmptyError;
}

function checkEmailError(input) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    input.value = input.value.trim();

    let isEmailError = !regexEmail.test(input.value);

    if(!isEmailError) {
        showSuccess(input);
    } else {
        showError(input, 'Sai định dạng Email');
    }
    return isEmailError;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isEmptyError = checkEmptyError([phonenumber, email, username, password, confirmPassword]);
});
