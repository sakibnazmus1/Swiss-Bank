// step-1: Add even handler with the withdraw buttton
//step-2: Get the withdraw amount from the withdraw input  field
// step-3: Get previous withdraw Total 
// step-4: Calculate Total withdraw amount
// 4-5. set total withdraw amount 

// step-5 Get the previous balance Total 
// step-7 : clear the input field 

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.Value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    // step-3 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);


    // step-4 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step-5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalancrTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalancrTotalString);
    console.log(previousBalanceTotal);


    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7: 
    withdrawField.Value = '';
})