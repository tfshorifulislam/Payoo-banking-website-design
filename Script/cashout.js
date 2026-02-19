document.getElementById('cashout-btn').addEventListener('click', function(){

    let cashoutNumber = getValueFromInput('cashout-number')
    if(cashoutNumber.length !== 11){
        alert('Invalid Agent Number');
        return;
    }

    let cashoutAmount = getValueFromInput('cashout-amount')
    let currentBalance = getBalance();
    let newBalance = currentBalance - Number(cashoutAmount);

    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }

    let pin = getValueFromInput('cashout-pin')
    if(pin === '8520'){
        alert('Cash-out Successful');
        let newHistory = document.getElementById('history-container');
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div id="Transaction-card" class="p-5 bg-base-100">
        Cash-out successful to ${cashoutNumber} at ${new Date()}
        </div>
        `
        newHistory.append(newDiv)

        setBalance(newBalance)
    }
    else{
        alert('Invalid Password')
    }
})