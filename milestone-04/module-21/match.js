const songs= "Tumi bondhu kala pAkhI ami jeno ki, bosonto kale tumay bolte pari ni, sada sada kala kala rong jomese sada kala";

const regx = /kala/giu;
const found = songs.match(regx);
console.log(found)