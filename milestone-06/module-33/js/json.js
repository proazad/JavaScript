const shop = {
    owner: "Alia Bat",
    address:{
        street: "Kochukhet Voot er Gali",
        city: "Ranbir Kapoor",
        country: "Bangladesh",
    },
    products: ['Laptop','Mouse','keyboard','Microphone','Monitor'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};

const shopJSON = JSON.stringify(shop);
console.log(shop);
console.log(shopJSON);
const JSONToObject = JSON.parse(shopJSON);
console.log(JSONToObject);
const text = "Hello World!";
const textJson = JSON.stringify(text);
console.log(textJson);
