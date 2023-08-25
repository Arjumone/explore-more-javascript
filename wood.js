/**
 * fixed: per item wood requirements
 * 1.chair--> 3 cft
 * 2.table --> 10 cft
 * 3.bed --> 50 cft
 * 
 * vary: quantity
 * */ 
function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairwood = 3;
    const perTablewood = 10;
    const perBedwood = 50;
    // console.log(chairQuantity, tableQuantity, bedQuantity);

    const chairwood = chairQuantity * perChairwood;
    const tablewood = tableQuantity * perTablewood;
    const bedwood = bedQuantity * perBedwood;

    const totalWood = chairwood + tablewood + bedwood;
    return totalWood;
}

const totalWood = woodCalculator(2,5,6);
console.log(totalWood);