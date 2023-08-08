function cubeNumber(number) {
    if (typeof number !== 'number' || Array.isArray(number)) {
        return "Invalid Input";
    }
    return number ** 3;
}






function matchFinder(string1, string2) {
    let result = '';
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        result = "Invalid Input! Give me Only string.";
    } else {
        result = string1.includes(string2);
    }
    return result;
}






function sortMaker(arr) {
    if (arr[0] <= 0 || arr[1] <= 0) {
        return "Invalid Input";
    }
    else if (arr[0] === arr[1]) {
        return "equal";
    } else {
        if (arr[0] < arr[1]) {
            return [arr[0], arr[1]] = [arr[1], arr[0]];
        } else {
            return arr;
        }
    }
}






function findAddress(obj) {
    const key = ['street', 'house', 'society'];
    let value = "";
    for (let i = 0; i < key.length; i++) {
        if (obj[key[i]]) {
            if (i == key.length - 1) {
                value += obj[key[i]];
            } else {
                value += obj[key[i]] + ",";
            }
        } else {
            if (i == key.length - 1) {
                value += "__";
            } else {
                value += "__,";
            }
        }
    }
    return value;
}







function canPay(changeArray, totalDue) {
    let errorMsg = '';
    let sum = 0;

    if (!Array.isArray(changeArray)) {
        return errorMsg += "Only Array is acceptable! ";
    } else if (changeArray.length === 0) {
        return errorMsg += "This is an empty Array! also not acceptable !";
    }
    for (let taka of changeArray) {
        sum += taka;
    }
    if (sum >= totalDue) {
        return true;
    }
    return false;
}