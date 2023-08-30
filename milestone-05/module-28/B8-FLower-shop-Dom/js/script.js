// Add Items in Shopping Cart 
function addToCart(data) {
    // Get Button Parent Node 
    const parentElement = data.parentNode;
    /**
     * Get Parents Child Inner Text  (Single Product  price)
     */
    const childSpan = parentElement.childNodes[1].innerText;
    const price = textToNumber(childSpan.split(" ")[1]);
    /**
     * Get Single product Name from Add to Cart
     */
    const name = parentElement.previousElementSibling.childNodes[1].innerText;

    /**
     * Add New Item
     */

    addNewItem(price, name);
    // var inputValue = document.getElementById("cartTable").childNodes[3].childNodes[1].childNodes[2].childNodes[0].value;

}


const itemNames = [];
function addNewItem(price, name) {

    /**
     * get Shopping Cart
     */
    const tbody = getElement('cartTable').childNodes[3];
    /**
     * Count Shopping Cart Exixting P Element 
     */
    const countTr = tbody.childElementCount;
    /**
     * Create new p Element 
     */
    // const createP = document.createElement('p');
    const tr = createNewElement('tr');

    const indexTD = createNewElement('td');
    indexTD.innerText = countTr + 1;

    const nameTD = createNewElement('td');
    nameTD.innerText = name;

    const itemTD = createNewElement('td');
    const input = createNewElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('value', 1);
    input.setAttribute('class', 'inputField');
    input.setAttribute('id', "input" + countTr);
    input.setAttribute('onchange', 'itemsIncrement(this)');
    itemTD.appendChild(input);

    const priceTD = createNewElement('td');
    priceTD.innerText = price;

    const totalPriceTD = createNewElement('td');
    totalPriceTD.innerText = textToNumber(input.value) * price;

    const DeleteTD = createNewElement('td');
    const deleteBtn = createNewElement('button');
    deleteBtn.setAttribute("type", 'button');
    deleteBtn.innerText = 'x'
    DeleteTD.appendChild(deleteBtn);


    tr.appendChild(indexTD);
    tr.appendChild(nameTD);
    tr.appendChild(itemTD);
    tr.appendChild(priceTD);
    tr.appendChild(totalPriceTD);
    tr.appendChild(DeleteTD);



    /**
    * Shopping Cart Total Amount Showing Element
    */
    let subTotalElement = getElement('sub-total');
    const subTotal = textToNumber(subTotalElement.innerText);
    /**
    * Calculation New Sub Total 
    */
    const newSubtotal = addtion(price, subTotal);

    /**
    * Replace New Sub total in old subtotal
    */
    subTotalElement.innerText = newSubtotal;
    // Grand Total 
    const grandTotalElement = getElement("g-total");
    grandTotalElement.innerText = newSubtotal

    /**
     * Append Created All Element in Shopping Cart 
     * new item is exist in shopping cart validation 
     */
    let val = 0;
    var inputItem = getElement('cartTable').childNodes[3].childNodes[1].childNodes[2].childNodes[0];
    if (!itemNames.includes(name)) {
        // The item is not in the set, add it
        itemNames.push(name);
        // Add the item to the shopping cart
        // ...
        tbody.appendChild(tr);
    } else {
        val++;
        
        let inputValue = parseFloat(inputItem.value);
        inputValue++;
        console.log(val)
        console.log(inputValue)

    }

}


function discountCalculation(data) {
    const coupon = "AZAD50";
    const coupon2 = "PHERO70";
    const couponElement = data.previousElementSibling;
    const userInputCoupon = couponElement.value;
    const totalElement = getElement('sub-total');
    const totalPrice = totalElement.innerText;
    const grandTotalElement = getElement("g-total");
    const discountElement = getElement("discount-amount");
    if (coupon === userInputCoupon) {
        const discountAmount = ((textToNumber(totalPrice) * 50) / 100);
        discountElement.innerText = "50% OFF  " + discountAmount + "$";
        const withDicountGrandTotal = textToNumber(totalPrice) - discountAmount;
        grandTotalElement.innerText = withDicountGrandTotal;
    } else if (coupon2 === userInputCoupon) {
        const discountAmount = ((textToNumber(totalPrice) * 70) / 100);
        discountElement.innerText = "70% OFF " + discountAmount + "$";
        const withDicountGrandTotal = textToNumber(totalPrice) - discountAmount;
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
    let itemTotalPrice = item.parentNode.parentNode.childNodes[4];
    // // Single Item Price 
    const singelItemPrice = item.parentNode.parentNode.childNodes[3].innerText;
    // Calculate Single Item Sub Total Price 
    const singleItemTotalPrice = textToNumber(quantity) * textToNumber(singelItemPrice);
    singleItemTotalPrice.toFixed(2);
    itemTotalPrice.innerText = singleItemTotalPrice;



    const totalElement = document.getElementById('sub-total');
    // const oldSubTtotalprice = totalElement.innerText
    // const newSubTotal = subtotalPrice(oldSubTtotalprice, singleItemTotalPrice, singelItemPrice);
    totalElement.innerText = singleItemTotalPrice;
}

// function subtotalPrice(oldSubTtotalprice, singleItemSubTotal, singleItemPrice) {
//     const newSubTotal = parseFloat(oldSubTtotalprice) + singleItemSubTotal;
//     return newSubTotal;
// }
