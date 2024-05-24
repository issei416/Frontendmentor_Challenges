let email_input = document.querySelector('input');
let sub_button = document.querySelector('button');
const emailPattern = /^[^.\s@]+@[^\s@]+\.[^\s@]+$/;

function validEmail(email_check){
    return emailPattern.test(email_check);
}

sub_button.addEventListener('click',()=>{
    let email = email_input.value;
    if(validEmail(email)){
        alert("Email was registered succesfully.");
    }
    else{
        alert("Enter valid email address.");
    }
});