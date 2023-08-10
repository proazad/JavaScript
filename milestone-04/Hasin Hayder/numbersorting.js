const list = [83,63,22,33,14,53,90,42,12,23,43,52,32,36];
const length = list.length-1;
for(let i = 0; i<length; i++){
    let oldNumber=0;
    for(let currentNumber of list){
        if(currentNumber > oldNumber){
            [oldNumber, currentNumber] = [currentNumber, oldNumber];
        }
    //    console.log( currentNumber);
    }
}

console.log(list);