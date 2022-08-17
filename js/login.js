// step-1: Add click even handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: Get the email address inside the input field 
    // Always remember to use.value to get text form an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: Get password
    // 3.a: set id on the html element 
    // 3.b:Get the element 
    // 3.c:Get the value from the element 

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGHER : Do not verify email password on the client side 
    // step-4: varify email and password 
    if (email === 'bank@swiss.com' && password === 'ami kisu kori nai') {
        window.location.href = 'https://sakibnazmus1.github.io/Swiss-Bank/bank.html';
    }
    else {
        alert('Try to hack password')
    }
})