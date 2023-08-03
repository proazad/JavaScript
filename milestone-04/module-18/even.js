// Target : 1 to 20 all event number print 
// var num = 0;
// while(num < 20){
//     console.log(num);
//     num = num + 2;
// }

//Target : Another way print above problem 
var x = 0 ;
while(x < 20){
    if(x % 2 == 0){
        console.log(x);
    }
    x++;
}

var x = 0 ;
while(x <= 20){
    if(x % 2 == 0 && x != 0){
        console.log(x);
    }
    x++;
}