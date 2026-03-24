
const button = document.getElementById("Button1")
const div1 = document.getElementById("schedule")

button.addEventListener("click", function () {
try {
    const initialloan = Number(prompt("enter your loan amount -- Numberic w/ no commas"))
    const downpayment = Number(prompt("enter your down payment -- as a percentage (dont include %, just the number)"))
    const loanterm = Number(prompt("enter your loan term in years (either 15 or 30)"))
    const totalmonths = loanterm * 12

        if (loanterm == !15 || loanterm == !30) {   
            throw new Error("loan term must be 15 or 30 years, refresh the page to try again");
        }        

        } catch (error) {
            alert("Error: " + error.message);}
    calculate(initialloan, downpayment, loanterm, totalmonths)

});  


function calculate(initialloan, downpayment, loanterm, totalmonths) {

const resultsDiv = document.getElementById("schedule");
    resultsDiv.innerHTML = "";
const principleloanamount = initialloan - downpayment
const annualinterestrate = 5.75
const monthlyinterestrate = annualinterestrate / 12
const monthlypayment = ((monthlyinterestrate * principleloanamount) / (1 - Math.pow(1 + monthlyinterestrate, -totalmonths))).toFixed(2);
const totalinterestpaid = (monthlypayment * totalmonths) - principleloanamount
const totalloancost = principleloanamount + totalinterestpaid

let rem = principleloanamount
function remaining(rem){
    rem - principle
    return remleft
}
let interestpaid = rem * monthlyinterestrate
let principlepaid = monthlypayment - interestpaid
let remainingloan = remleft - principlepaid

for (let i = 1; i <= months; i++) {
    const monthP = document.createElement("p");
    remaining(remainingloan);
    monthP.innerHTML = "Month " + i  + "Monthly payment: $" + (monthlypayment).toFixed(2) + "Interest Paid: $" + interestpaid + "Principle Paid: $" + principlepaid + "Remaining Loan Balance: $" + remainingloan
    resultsDiv.appendChild(monthP);
}

const summary = document.createElement("p");
summary.innerHTML =
    "Monthly Payment: $" + monthlypayment.toFixed(2)  +
    "Interest Paid: $" + interestpaid.toFixed(2)  +
    "Prinicple Paid: $" + principlepaid.toFixed(2) +
    "Remaining Loan: $" + remainingloan.toFixed(2);
resultsDiv.appendChild(summary);

if (remainingloan == 0) {
    const ending = document.createElement("p");
    ending.innerHTML = "<strong>This ends the Amortization Calculator...</strong>"
}
}