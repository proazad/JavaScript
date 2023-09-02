const addtoCart = () => {
    const productName = document.getElementById("product");
    const productQuantity = document.getElementById("quantity");
    const product = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';
    displayProduct(product, quantity);
    setDataLocalStorage(product, quantity);
    console.log(product, quantity);
}


const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById("cartContainer");
    if (product && quantity) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${product} : </span> ${quantity}`;
        productContainer.appendChild(li);
    }
}

const getData = () => {
    let cart = {}
    const localData = localStorage.getItem('cart');
    if (localData) {
        cart = JSON.parse(localData);
    }
    return cart;
}

const setDataLocalStorage = (product, quantity) => {
    const cart = getData();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);
}

const displayProductFromLocal = ()=>{
    const localData = getData();
    for(const product in localData){
        displayProduct(product, localData[product]);
    }
}
displayProductFromLocal()