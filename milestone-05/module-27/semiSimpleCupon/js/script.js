function getParcent(amount, parcent) {
    const parcentAmount = ((amount * parcent) / 100).toFixed(3);
    return parcentAmount;
}

function getInnerTexttoFloat(value) {
    let priceElement = document.getElementById(value);
    const price = priceElement.innerText;
    const priceNumber = parseFloat(price);
    return priceNumber;
}

function getInputValueToFloat(value) {
    let couponField = document.getElementById(value);
    const couponText = couponField.value;
    if (couponText === "DIC30") {
        const coupon = 30;
        couponField.value = '';
        return coupon;
    } else {
        alert("Your Coupon Code is not valid!");
    }
}

document.getElementById("btn-cupon").addEventListener("click", function () {
    const price = getInnerTexttoFloat('price');
    const discountparcent = getInputValueToFloat("cuponField");
    const discountAmount = getParcent(price, discountparcent);
    if (!discountparcent) {
        return;
    } else if (price <= 700) {
        alert("Your Cupon is Already Applied! ")
    } else {
        const lastAmount = price - discountAmount;
        let priceElement = document.getElementById('price');
        priceElement.innerText = lastAmount;
    }

});