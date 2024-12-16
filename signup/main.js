let btnSign = document.getElementById('btnSignup');
let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail'); 
let inputPassword = document.getElementById('inputPassword');
let user ;
    
    if (localStorage.getItem('user') !=null)
    {
        user = JSON.parse(localStorage.getItem('user'))
    }
    else
    {
        user = [];
    }
btnSign.addEventListener('click', () => {
    if( validationName()== true && validationEmail()==true && validationPassword()==true)
        {
            let obj = {
                name:inputName.value,
                email:inputEmail.value,
                password:inputPassword.value
            };
            user.push(obj);
            location.href = '../../Login/login.html';
            localStorage.setItem('user' , JSON.stringify(user));
        }
})
function validationName()
{
    let regex = /^[A-Z][a-z]{3,12}$/;
    if (regex.test(inputName.value)==true)
    {
        inputName.classList.replace('is-invalid','is-valid');
        return true;
    }
    else
    {
        inputName.classList.add('is-invalid');
        return false;
    }
}
function validationEmail()
{
    let regex = /^[a-zA-Z]+@[a-zA-Z]+\.(com)$/
    if(regex.test(inputEmail.value)==true)
    {
        inputEmail.classList.replace('is-invalid','is-valid');
        return true;
    }
    else
    {
        inputEmail.classList.add('is-invalid');
        return false;
    }

}
function validationPassword()
{
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(inputPassword.value)==true)
    {
        inputPassword.classList.replace('is-invalid','is-valid');
        return true;
    }
    else
    {
        inputPassword.classList.add('is-invalid');
        return false;
    }

}




