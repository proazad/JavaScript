/**
 * Chair = 3cft 
 * table = 10 cft 
 * bed  = 50 cft
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    // initalize per Item required Wood 
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // Calculate Total Wood per Item
    if(typeof chairQuantity !== 'number' || typeof tableQuantity !== 'number' || typeof bedQuantity !== 'number'){
        return "Please give me a numbre";
    }
    const chairWoodCalc = chairQuantity * perChairWood;
    const tableWoodCalc = tableQuantity * perTableWood;
    const bedWoodCalc = bedQuantity * perBedWood;
    // Calculate Total Furniture Wood 
    const totalWood = chairWoodCalc + tableWoodCalc + bedWoodCalc;

    return totalWood;
}

const totalWood = woodCalculator(1, 3, 1);
if(totalWood !== 'number'){
    console.log(totalWood);
}else{
    console.log(totalWood,"cft");
}