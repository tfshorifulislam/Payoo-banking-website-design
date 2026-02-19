document.getElementById('add-money-btn').addEventListener('click', function(){

    let bankSelect = getValueFromInput('select-back')
    if(bankSelect === 'Select back'){
        alert('Please! select a bank');
        return;
    }

    let accNumber = getValueFromInput('bank-account-number');
    if(accNumber.length !== 11){
        alert('Invalid Account Number');
        return;
    }

    let addMoneyAmount = getValueFromInput('add-money-amount');
    if(addMoneyAmount === ''){
        alert('Please! Input a amount');
        return;
    }

    let currentBalance = getBalance();
    let newBalance = currentBalance + Number(addMoneyAmount);

    let pin = getValueFromInput('add-money-pin')
    if(pin === '8520'){
        alert('Add money successful from');
        let newHistory = document.getElementById('history-container');
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div id="Transaction-card" class="p-5 bg-base-100">
        Add money successful from ${bankSelect}, account-number ${accNumber} at ${new Date()}
        </div>
        `
        newHistory.append(newDiv)
        setBalance(newBalance)
    }
    else{
        alert('Invalid pin');
        return;
    }
})