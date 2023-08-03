function isEven(year){
    if(year % 2 == 0){
        return true;
    }else{
        return false;
    }
}
let birthYear = 1996;
if(isEven(birthYear)){
    console.log("Your Birth day Year is Even");
}else{
    console.log("Your Birth day Year is Odd");
}