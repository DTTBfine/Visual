var homepage = document.getElementById("Trang-chu");
var introduce = document.getElementById("Gioi-thieu");
var instruction = document.getElementById("Huong-dan");
var contact = document.getElementById("Lien-he");

var Homepage_link = document.getElementById("Homepage_link")
var Introduce_link = document.getElementById("Introduce_link")
var Instruction_link = document.getElementById("Instruction_link")
var Contact_link = document.getElementById("Contact_link")

Homepage_link.addEventListener("click", function() {
    homepage.style.display = 'flex';
    introduce.style.display = 'none';
    instruction.style.display = 'none';
    contact.style.display = 'none';
});

Introduce_link.addEventListener("click", function() {
    homepage.style.display = 'none';
    introduce.style.display = 'flex';
    instruction.style.display = 'none';
    contact.style.display = 'none';
});

Instruction_link.addEventListener("click", function() {
    homepage.style.display = 'none';
    introduce.style.display = 'none';
    instruction.style.display = 'flex';
    contact.style.display = 'none';
});

Contact_link.addEventListener("click", function() {
    homepage.style.display = 'none';
    introduce.style.display = 'none';
    instruction.style.display = 'none';
    contact.style.display = 'flex';
});

var modal = document.getElementById("myModal");
var log_out = document.getElementById("Register/login-btn");
document.getElementById("Register__btn").addEventListener("click", function() {
    modal.style.display = 'flex';
    log_out.style.dispaly = 'none';
});
