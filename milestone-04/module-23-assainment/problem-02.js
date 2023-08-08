function matchFinder(string1, string2) {
    let result = '';
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        result = "Invalid Input! Give me Only string.";
    } else {
        result = string1.includes(string2);
    }
    return result;
}


console.log(matchFinder("John Doe", 'on'));
console.log(matchFinder('-88', 8));
console.log(matchFinder('Park Peter','pet'));