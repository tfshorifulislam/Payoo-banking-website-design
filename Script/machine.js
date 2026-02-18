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