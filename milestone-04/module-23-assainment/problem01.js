function cubeNumber(number) {
    if (typeof number !== 'number' || Array.isArray(number)) {
        return "Invalid Input";
    }
    return number ** 3;
}


console.log(cubeNumber(-4));