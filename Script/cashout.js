document.getElementById('cashout-btn').addEventListener('click', function(){

   let cashoutNumberInput = document.getElementById('cashout-number') 
   let cashoutNumber = cashoutNumberInput.value;

   if(cashoutNumber.length !== 11){
    alert('invalid Agent Number')
    return;
   }

   let cashoutAmountInput = document.getElementById('cashout-amount')
   let cashoutAmount =cashoutAmountInput.value;
   console.log(cashoutAmount)

   let currentBalance = document.getElementById('balance')
   let balance = currentBalance.innerText;


   let newBalance = Number(balance) - Number(cashoutAmount)

   if(newBalance < 0){
    alert('Invalid Amount')
    return;
   }

   let cashoutPin = document.getElementById('cashout-pin');
   let pin = cashoutPin.value;

   if(pin === '8520'){
    alert('Cash-out Successful');
    currentBalance.innerText = newBalance;
   }
   else{
    alert('Invalid Pin')
    return;
   }
})