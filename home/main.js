document.getElementById('userName').innerHTML = localStorage.getItem('user1Name');
let btnLogout = document.getElementById('logoutButton');
btnLogout.addEventListener('click', () => {
    localStorage.removeItem('user1Name');
    location.href = '../login/login.html';
});