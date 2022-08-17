// step-1: Add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: Get the deposit amount from the deposit input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);


    // step-3 Get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    // step-4: Add number to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmmount;
    depositTotalElement.innerText = currentDepositTotal;


    // step-5: Get balance current total 
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalancrTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalancrTotalString);


    // step - 6: Calculate current balance Total              
    const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    // step-7: clear deposit field
    depositField.value = '';
})