function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCost = Math.trunc(lostFightCount / 2) * helmetPrice;
    let swordCost = Math.trunc(lostFightCount / 3) * swordPrice;
    let shieldCost = Math.trunc(lostFightCount / 6) * shieldPrice;
    let armorCost = Math.trunc(lostFightCount / 12) * armorPrice;

    let totalExpenses = helmetCost + swordCost + shieldCost + armorCost;
    
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}    

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200 )   
