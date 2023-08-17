function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    inputField.value = '';
    if (inputText === '') {
        alert("input field must not be empty!!");
    } else if (isNaN(Number(inputText))) {
        window.alert("Give me only Number!!");
    } else {
        const value = parseFloat(inputText);
        if (value <= 0) {
            alert("Give me only Positive Number!!")
        } else {
            return value;
        }
    }
}

function setElementText(elemenetId, area) {
    const element = document.getElementById(elemenetId);
    element.innerText = area;
}

// function simpleMutiplicaton(input1, input2, displayId){
//     const inputWidth = getInputValue(input1);
//     const inputHeight = getInputValue(input2);
//     const area = width * height;
//     if (width && height) {
//        return setElementText(displayId, area);
//     }
// }