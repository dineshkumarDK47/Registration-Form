document.addEventListener('DOMContentLoaded', function() {
    const register = document.getElementById('registration');
    register.addEventListener('submit',function(event){
        event.preventDefault();
        registerUser();
    });
});
function registerUser(){
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/register',{
        method: 'POST',
        headers:{
            'content-Type':'application/json',
        },
        body: JSON.stringify({username,email,password}),
    })
    .then(response=>response.json())
    .then(data=>{
        alert(data.message);
    })
    .catch(error=>console.error('Error:',error));
}