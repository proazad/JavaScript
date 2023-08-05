const ages = [167,190,120,165,137,265,90];
function smallest(ages){
    let small = ages[0];
    for(var i =0; i < ages.length; i++){
        let age = ages[i];
        if(small > age){
            small = age;
        }
    }
    return small;
}
console.log("This Person is Smallest", smallest(ages));