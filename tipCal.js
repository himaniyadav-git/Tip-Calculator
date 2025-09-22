let btn = document.querySelector("button");
let input1 = document.querySelector("#inp1");
let input2 = document.querySelector("#inp2");
let tip = document.querySelector(".tip");

btn.addEventListener("click", function() {
    // console.log("btn clicked");
    // (Bill Amount x Tip Percentage) / 100 = Tip Amount.

    tipCalculator();
    
})

function tipCalculator() {
    let bill = Number(input1.value); 
    let tipPercent = Number(input2.value);
    tip.innerText = "";

    if(bill <= 0|| tipPercent < 0){
        tip.innerText = "Please enter valid values!";
        return ;
        
    }

    let tipAmount = (bill * tipPercent)/100;
    let totalAmount = bill + tipAmount;
    console.log(tipAmount);

    let total = document.createElement("p");
    total.innerText = `Total Bill (with Tip) : Rs. ${totalAmount.toFixed(2)}`;

    total.classList.add("tip");

    tip.appendChild(total);
    
}
