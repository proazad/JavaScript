document.getElementById('deposit-btn').addEventListener('click', function () {
    // Old Deposite Amount 
    let depositeElement = document.getElementById('deposit-amount');
    let oldDepo = parseFloat(depositeElement.innerText);
    // New Deposite Ammount 
    const depositField = document.getElementById("deposit-field");
    const newAmmount = parseFloat(depositField.value);

    // Error Massage 
    const Error = document.getElementById("depositError");
    // console.log(newAmmount);
    if (!newAmmount) {
        Error.innerText = "Please Write a valid amount";
    } else {
        let totalDepo = oldDepo + newAmmount;
        depositeElement.innerText = totalDepo;

        const balanceElement = document.getElementById("balance");
        const oldBalance = balanceElement.innerText;
        const newBalance = parseFloat(oldBalance) + newAmmount;
        balanceElement.innerText = newBalance;

        depositField.value = ''
        Error.innerText = "";
    }

});

document.getElementById("withdraw-btn").addEventListener('click', function () {
    // Old Withdraw Balance 
    const withdrawElement = document.getElementById("withdraw-amount");
    const oldWithdrawAmmount = parseFloat(withdrawElement.innerText);

    // Withdraw Ammont 
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmmount = parseFloat(withdrawField.value);
    // Previous Balance 
    const balanceElement = document.getElementById("balance");
    const oldBalance = balanceElement.innerText;
    // Error Massage 
    const Error = document.getElementById("withdrawError");
    if (oldBalance < withdrawAmmount) {
        Error.innerText = "Insuficient Amount! "
    } else {
        let totalWithdraw = oldWithdrawAmmount + withdrawAmmount;
        withdrawElement.innerText = totalWithdraw;

        // Balance Deduction 
        const newBalance = parseFloat(oldBalance) - withdrawAmmount;
        balanceElement.innerText = newBalance;

        withdrawField.value = '';
        Error.innerText = ""
    }

});