const songs= "Tumi bondhu kala pAkhI ami jeno ki, bosonto kale tumay bolte pari ni, sada sada kala kala rong jomese sada kala";
const searchString = "KaLa";
// const searchStringLoCase = searchString.toLowerCase();
// const songsloCase = songs.toLowerCase();
// const pakhiExits = songs.includes(searchString);
// const pakhiExits = songsloCase.includes(searchStringLoCase);

const pakhiExits = songs.toLowerCase().includes(searchString.toLowerCase());
console.log(pakhiExits);
