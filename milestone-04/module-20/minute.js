function hourToMinute(hour){
    return hour*60;
}

let hours = 5;

if(hours >1){
    console.log(hours+" Hours is equal to "+ hourToMinute(hours)+" Minutes");
}else{
    console.log(hours+ " Hour is equal to "+ hourToMinute(hours)+" Minutes");
}