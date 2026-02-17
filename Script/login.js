document.getElementById('login-btn').addEventListener('click', function(){
    
    let numberInput = document.getElementById('input-number')
    number = numberInput.value;
    
    let passwordInput = document.getElementById('input-password')
    password = passwordInput.value;
    
    if(number === '01919191472' && password ==='8520'){
        alert('login successful')
        window.location.assign('./home.html')
    }
    else{
        alert('login failed');
        return;
    }
})