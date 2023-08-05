const ages = [167,190,120,165,137,265];

function tallest(ages){
    let tall = ages[0];
    for(var i = 0; i < ages.length; i++){
        let age = ages[i];
        if(tall < age ){
            tall = age; 
        }
    }
    return tall;
}

// tallest(ages);
console.log("This Person is tallest ", tallest(ages))