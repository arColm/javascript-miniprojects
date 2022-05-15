const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordCheck = document.querySelector(".password p");
const submit = document.querySelector("button");

let a =[password,confirmPassword];

a.forEach(input => {
    input.addEventListener("input", e => {
        if(confirmPassword.value!=="") {
            if(confirmPassword.value!==password.value) {
                password.style.border="3px solid red";
                confirmPassword.style.border="3px solid red";
                passwordCheck.style.visibility="visible";
                submit.disabled = true;
            } else {
                
                password.style.border="3px solid green";
                confirmPassword.style.border="3px solid green";
                passwordCheck.style.visibility="hidden";
                submit.disabled = false;
            }
        }
    })
})
