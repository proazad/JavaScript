const songs= "Tumi bondhu kala pAkhI ami jeno ki, bosonto kale tumay bolte pari ni, sada sada kala kala rong jomese sada kala";

const kala = "kala";
const indexKala = songs.indexOf(kala);
const pakhiIndex = songs.toLowerCase().indexOf("pakhi");
console.log(pakhiIndex);
console.log(indexKala)
if(pakhiIndex !== -1){
    console.log("Exist Inside the String");
}else{
    console.log("Cannot find it! ");
}
