document.getElementById('cashout-btn').addEventListener('click', function(){

    let cashoutNumber = getValueFromInput('cashout-number')
    if(cashoutNumber.length !== 11){
        alert('Invalid Agent Number');
        return;
    }

    let cashoutAmount = getValueFromInput('cashout-amount')
    let getBalance = document.getElementById('balance');
    let balance = getBalance.innerText;
    let newBalance = Number(balance) - Number(cashoutAmount);

    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }

    let pin = getValueFromInput('cashout-pin')
    if(pin === '8520'){
        alert('Cash-out Successful');
        getBalance.innerText = newBalance;
    }
    else{
        alert('Invalid Password')
    }
})