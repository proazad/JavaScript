const products = [
    { id: 1, name: "Walton Phone", price: 14999 },
    { id: 2, name: "Sumsung Phone", price: 22099 },
    { id: 3, name: "HP laptop", price: 80999 },
    { id: 4, name: "Imac m1 chip laptop", price: 394884 },
    { id: 5, name: "Lenovo Laptop youga", price: 73633 },
    { id: 6, name: "Vivo phone", price: 8833 },
    { id: 7, name: "HP Inspiron laptop", price: 783873 },
    { id: 8, name: "Xiami phone", price: 938998 },
    { id: 9, name: "Nokia phone", price: 98943 },
    { id: 10, name: "Dell Laptop", price: 4234728 },
    { id: 11, name: "Blackberry phone", price: 47883 },
    { id: 12, name: "Nothing phone", price: 92393 },
    { id: 13, name: "lenono Youga", price: 343249 },
    { id: 14, name: "Dell lapton 222", price: 828493 },
    { id: 15, name: "Symphony Phone", price: 432423 },
];


// for(let i =0 ; i<products.length; i++){
//     console.log(products[i]);
// }
// for(const product of products){
//     console.log(product.name)
// }
function matchedProduct(products,search){
   for(const product of products){
    // console.log(product.name.includes(search));
   }
}

let matchProduct = matchedProduct(products,'youga');
// console.log(matchProduct);


const number = parseInt("0x123", 16);
console.log(number); // 291