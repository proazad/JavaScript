function addToCart(data) {
    const parentElement = data.parentNode;
    const childSpan = parentElement.childNodes[1].innerText;
    const price = childSpan.split(" ")[1];
    const name = parentElement.previousElementSibling.childNodes[1].innerText;
    const totalElement = document.getElementById('total');
    const totalPrice = totalElement.innerText;
    const total = parseFloat(price) + parseFloat(totalPrice);
    totalElement.innerText = total;
    createLi(price, name);

    // Grand Total Calculation 
    const grandTotalElement = document.getElementById("g-total");
    grandTotalElement.innerText = total;
}

function createLi(price, name) {
    const pricelistContainer = document.getElementById("cartTable");
    const countP = pricelistContainer.childElementCount;
    const createP = document.createElement('p');
    createP.classList.add('d-flex', 'justify-content-between');
    createP.innerHTML = `<span><b>${countP + 1}.</b> ${name}</span> 
    <span> 
    <input type="number" onchange="itemsIncrement(this)" value='1' min='1' style="width:50px">
     <span>x ${price} = </span>  
     <strong>${price}</strong>
     </span> 
    `;
    pricelistContainer.appendChild(createP);
}

function discountCalculation(price) {
    const coupon = "AZAD50";
    const coupon2 = "PHERO70";
    const couponElement = document.getElementById("coupon-input");
    const userInputCoupon = couponElement.value;
    const totalElement = document.getElementById('total');
    const totalPrice = totalElement.innerText;
    const grandTotalElement = document.getElementById("g-total");
    const discountElement = document.getElementById("discount-amount");
    if (coupon === userInputCoupon) {
        const discountAmount = ((parseFloat(totalPrice) * 50) / 100);
        discountElement.innerText = "50% OFF  " + discountAmount + "$";
        const withDicountGrandTotal = parseFloat(totalPrice) - discountAmount;
        grandTotalElement.innerText = withDicountGrandTotal;
    } else if (coupon2 === userInputCoupon) {
        const discountAmount = ((parseFloat(totalPrice) * 70) / 100);
        discountElement.innerText = "70% OFF " + discountAmount + "$";
        const withDicountGrandTotal = parseFloat(totalPrice) - discountAmount;
        grandTotalElement.innerText = withDicountGrandTotal;
    } else {
        alert("Invalid Coupon Code !!");
    }
}

// shopping  Itmes Multiplication

function itemsIncrement(item) {
    // Input Value 
    const quantity = item.value;
    // Total Item  Price InnerText 
    let itemTotalPrice = item.parentNode.childNodes[5];
    // Single Item Price 
    const textNode = item.parentNode.childNodes[3].innerText;
    const singleItemPrice = textNode.split(' ')[1];
    const itemsPrice = parseFloat(quantity) * parseFloat(singleItemPrice);
    itemsPrice.toFixed(2);
    itemTotalPrice.innerText = itemsPrice;


    // Yesterday Will start From Here 
    // Yesterday Will start From Here 
    // Yesterday Will start From Here 
    // Yesterday Will start From Here 
    // Yesterday Will start From Here 
    // Yesterday Will start From Here 
    const totalElement = document.getElementById('total').innerText;
    const subTotal = parseFloat(totalElement)
    
}
