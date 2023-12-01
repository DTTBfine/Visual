var phonenumber = document.querySelector('#Phonenumber');
var email = document.querySelector('#Email');
var username = document.querySelector('#Username');
var password = document.querySelector('#Password'); 
var confirmPassword = document.querySelector('#confirmPassword');
var role = document.querySelector('#Role');

function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(!input.value){
            showError(input,'Không được để trống')
        }
        else {
            showSuccess(input)
        }
    })

}

form.addEventListener('submit',function(e){
    e.preventDefault()

    checkEmptyError([phonenumber, email, username, password, confirmPassword ])
})