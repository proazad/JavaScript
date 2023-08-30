function handleClickCard(e) {
    const product = e.querySelector('h2').innerText;
    const priceText = e.querySelector('p').childNodes[0].innerText;
    const price = parseFloat(priceText);

    const selectItemContainer = document.getElementById("selected-items");
    const count = selectItemContainer.childElementCount;
    const li = document.createElement("li");
    li.innerText = count + 1 + ". " + product;
    selectItemContainer.appendChild(li);
    updateTotalPrices(price)

}





// Call the enableButton function to set up the button's initial state and interaction




// Function to update total prices
function updateTotalPrices(price) {

    const oldSubtotalElement = document.getElementById("total-price");
    const oldsubTotalPrice = parseFloat(oldSubtotalElement.innerText);

    const finalTotalElement = document.getElementById("grand-total");


    const priceTotal = price + oldsubTotalPrice;
    const pirce2digit = priceTotal.toFixed(2);
    oldSubtotalElement.innerText = pirce2digit;

    finalTotalElement.innerText = pirce2digit;

    if(pirce2digit>0){
        document.getElementById("purchase").removeAttribute('disabled');
    }
    if(pirce2digit>200){
        document.getElementById("discountBtn").removeAttribute('disabled');
    }
}




function applyDiscount() {
    const reedemCode = "SELL200"
    const discountElement = document.getElementById('discount');
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = parseFloat(totalPriceElement.innerText);

    const couponInput = document.getElementById('couponInput').value;
    const discount = ((totalPrice * 20) / 100);
    const discount2Digit = discount.toFixed(2);
    if(reedemCode === couponInput){
        discountElement.innerText = discount2Digit;
    }else if(couponInput === ''){
        document.getElementById('error').innerText = "Field Must not be Empty!"
    }else{
        document.getElementById('error').innerText = "Coupon Code is not valid!"
    }
    const grandTotal = totalPrice - discount2Digit; 
    const grandTotal2Gigit = grandTotal.toFixed(2);
    const grandTotalElement = document.getElementById("grand-total");
    grandTotalElement.innerText = grandTotal2Gigit;

}



function  gohome(){
    location.reload();
}