function getParcent(amount, parcent){
    const parcentAmount = ((amount * parcent) / 100).toFixed(3);
    return parcentAmount;
}
document.getElementById("cupon").addEventListener("click",function(){
    let priceElement = document.getElementById("price");
    const price = priceElement.innerText;
    const priceNumber = parseFloat(price);
    const parcent = 30;
    const parcentAmount = getParcent(priceNumber, parcent);
    if(priceNumber <=700){
        alert("Your Cupon is Already Applied! ")
    }else{
        const lastAmount = priceNumber - parcentAmount;
        priceElement.innerText = lastAmount;
    }
    
});