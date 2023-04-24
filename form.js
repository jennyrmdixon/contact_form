let password1;
let password2;

const passwordfeild1 = document.querySelector('input#password1');
const passwordfeild2 = document.querySelector('input#password2');

addEventListener("input", (event) => {
password1 = document.getElementById('password1').value;
password2 = document.getElementById('password2').value;

    if (password1 !== password2) {
        passwordfeild1.classList.add("error");
        passwordfeild2.classList.add("error");
    }
    else {
        passwordfeild1.classList.remove("error");
        passwordfeild2.classList.remove("error");
    }
});


