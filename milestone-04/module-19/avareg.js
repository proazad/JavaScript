function myResult(assainment1, assainment2, assainment3){
    let total = assainment1 + assainment2 + assainment3;
    let avareg = total / 3;
    return avareg;
}
let assainment1 = 60;
let assainment2 = 60; 
let assainment3 = 59;
let myAvareg = myResult(assainment1, assainment2, assainment3);
console.log("My Avareg Assainment Marks so far : ", myAvareg);