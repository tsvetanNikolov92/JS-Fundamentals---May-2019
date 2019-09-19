function cookingMasterclass(input) {
    let budget = Number(input.shift());
    let students = Number(input.shift());
    let flourPackPrice = Number(input.shift());
    let singleEggPrice = Number(input.shift());
    let singleApronPrice = Number(input.shift());
    let freeFlour = students / 5;
    
    if (freeFlour < 1) {
        freeFlour = 0;
    }
    let totalApronPrice = singleApronPrice * Math.ceil(students * 1.20);
    let totalEggPrice = singleEggPrice * 10 * students;
    let totalFlourPrice = (students - freeFlour) * flourPackPrice;
    let totalSum = totalFlourPrice + totalEggPrice + totalApronPrice; 
   
    let isBudgedEnought = budget - totalSum;

    if (isBudgedEnought >= 0) {
        console.log(`Items purchased for ${totalSum.toFixed(2)}$.`);
    } else {
        console.log(`${Math.abs(isBudgedEnought).toFixed(2)}$ more needed.`);
    }
}

cookingMasterclass([ '50', '2', '1.0', '0.10', '10.0' ]);