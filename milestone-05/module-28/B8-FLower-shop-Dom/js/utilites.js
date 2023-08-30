// function getInnerText(elementID) {
//     const element = document.getElementById(elementID);
//     const elementInnerText = element.innerText;
//     return elementInnerText;
// }

function textToNumber(text) {
    const number = parseFloat(text);
    return number;
}

function getElement(ID) {
    const element = document.getElementById(ID);
    return element;
}

function createNewElement(tag) {
    const newElement = document.createElement(tag);
    return newElement;
}

function addtion(num1, num2) {
    return num1 + num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}