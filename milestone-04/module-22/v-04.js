/**
 * Show output from 1-50
 * if the number is divisible by 3  then instead of the number show 'foo'
 * if the number is divisible by 5 then instead of the number show 'bar'
 * if the number is divisible by both 3 and 5 then instead of the number show 'foobar'
 */
function printNumber(num){
    for(var i = 1; i < num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("foobar");
        }else if(i % 5 === 0){
            console.log("bar");
        }else if(i % 3 === 0){
            console.log("foo");
        }else{
            console.log(i);
        }
    }
}

const number = 50;
printNumber(number);