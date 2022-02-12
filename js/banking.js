// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
};

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
};

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }



    // get current deposit
    /*
     const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; */


    // update balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */

});
// document.getElementById('deposit-button').addEventListener('click', function () {
//     const depositInput = document.getElementById('deposit-input');
//     const depositAmountText = depositInput.value;
//     const depositAmount = parseFloat(depositAmountText);
//     const depositAmount = getInputValue('deposit-input');

//     // get current deposit
//     const depositTotal = document.getElementById('deposit-total');
//     const depositTotalText = depositTotal.innerText;
//     const previousTotalText = parseFloat(depositTotalText);
//     depositTotal.innerText = previousTotalText + depositAmount;

//     // update balance
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     balanceTotal.innerText = previousBalanceTotal + depositAmount;
// });


// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more money than what you have in your account')
    }


    // update withdraw total

    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
     */


    // update account balance
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal; */
});


// // handle withdraw button event
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawAmountText = withdrawInput.value;
//     const withdrawAmount = parseFloat(withdrawAmountText);
//     console.log(withdrawAmount);
//     const withdrawAmount = getInputValue('withdraw-input')

//     // update withdraw total
//     const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawText = withdrawTotal.innerText;
//     const previousWithdrawTotal = parseFloat(previousWithdrawText);
//     const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
//     withdrawTotal.innerText = newWithdrawTotal;

//     // update account balance
//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceText);
//     const newBalanceTotal = previousBalanceTotal - withdrawAmount;
//     balanceTotal.innerText = newBalanceTotal;
// });