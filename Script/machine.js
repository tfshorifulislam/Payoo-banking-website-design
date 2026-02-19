// machine input value;
function getValueFromInput (id){
    let input = document.getElementById(id);
    let value = input.value;
    return value;
}

// machine get balance
function getBalance(){
    let balanceElement = document.getElementById('balance');
    let balance = balanceElement.innerText;
    console.log(Number(balance))
    return Number(balance);
}

// machine set balance
function setBalance (value){
    let balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}


// toggle button 
function showOnly (id){
    let addMoney = document.getElementById('add-money')
    let cashout = document.getElementById('cashout')
    let transaction = document.getElementById('history')

    addMoney.classList.add('hidden')
    cashout.classList.add('hidden')
    transaction.classList.add('hidden')


    let show = document.getElementById(id)
    show.classList.remove('hidden')
}


