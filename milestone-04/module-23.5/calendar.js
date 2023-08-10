const monthName = "August,2023";
const days = 31;
const startingDay = 2;

console.log("Sun    Mon    Tue    Wed    Thu    Fri    Sat");

for(let i = 0; i<= 5; i++){
    let dayRow = '';
    for(let j = 1; j<=7; j++){
        let currentDay = 7 * i + j - startingDay;
        if(currentDay > days){
            break;
        }else if(currentDay < 1){
            currentDay= " ";
        }
        if(currentDay > 9){
            dayRow += currentDay +"     ";
        }else{
            dayRow += currentDay + "      ";
        }
    }
    console.log(dayRow)
}