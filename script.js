

//const passDiv = document.getElementById('password');
//const cpassDiv = document.getElementById('cpassword');

//let password = passDiv.innerText;
//let cpassword = cpassDiv.innerText;


//console.log(password);

//let password = passDiv.addEventListener('input', letter => {
//    console.log(letter.value);
//})

const form = document.getElementById('form');
const pass = document.getElementById('password');
const cpass = document.getElementById('cpassword');

const error = document.getElementById('error');

const sumbit = document.getElementById('btn');
let s = '';

pass.addEventListener('input', () => {
    let p = pass.value;
    let c = cpass.value;
    if(p == c){
        error.innerText = '';
        pass.classList.replace('wrong','formsec1Input');
        cpass.classList.replace('wrong','formsec1Input');
    }
    else{
        error.innerText = 'Passwords don\'t match ';
        pass.classList.replace('formsec1Input','wrong');
        cpass.classList.replace('formsec1Input','wrong');
    }
        
})

cpass.addEventListener('input', () => {

    let p = pass.value;
    let c = cpass.value;
    if(p == c){
        error.innerText = '';
        pass.classList.replace('wrong','formsec1Input');
        cpass.classList.replace('wrong','formsec1Input');
    }
    else{
        error.innerText = 'Passwords don\'t match ';
        pass.classList.replace('formsec1Input','wrong');
        cpass.classList.replace('formsec1Input','wrong');
    }
})

sumbit.addEventListener('click', () => {
    console.log(pass.value);
    console.log(cpass.value);
})

