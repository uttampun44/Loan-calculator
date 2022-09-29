
function Loan(){

    // intializing the value
    const amount = document.getElementById('amount').value
    const interest = document.getElementById('interest').value
    const month = document.getElementById('month').value;
     

    // calculating value loan amount
    const interestamount = Number(amount * (interest * .01) / month);

    const total = Number((amount/month) + interestamount);

    const payments = document.getElementById('payments');

    
    // loan result result
    payments.innerText = `The total amount loan is ${total}`;
}

