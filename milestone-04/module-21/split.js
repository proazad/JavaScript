const songs= "Tumi bondhu kala pAkhI ami jeno ki, bosonto kale tumay bolte pari ni, sada sada kala kala rong jomese sada kala";

const textarray = songs.split("");
const text = textarray.join("");
console.log(textarray)
console.log(text)

const part = songs.slice(5,8);
console.log(part);
const partial = songs.substring(5,8);
console.log(partial);