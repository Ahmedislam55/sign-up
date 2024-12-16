let user1=[];
user1 = JSON.parse(localStorage.getItem('user'));
let btnLogin = document.getElementById('btnLogin');
let inputEmailLogin = document.getElementById('inputEmailLogin');
let inputPasswordLogin = document.getElementById('inputPasswordLogin');
btnLogin.addEventListener('click', () => {
        for (let i=0; i <user1.length; i++)
        {
         if (user1[i].email == inputEmailLogin.value && user1[i].password == inputPasswordLogin.value)
         {
             let y = user1[i].name;
             localStorage.setItem('user1Name' , y);
             location.href = '../../Home/index.html';
             break;
         }
         else
         {
                 inputEmailLogin.classList.add('is-invalid');
                 inputPasswordLogin.classList.add('is-invalid');
                 document.getElementById('error').classList.remove('d-none');
         } 
        }
});
