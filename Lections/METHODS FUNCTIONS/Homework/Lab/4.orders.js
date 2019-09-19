function orders(product, productQuant) {
    let sum = 0;

    if (product === 'coffee') {
        sum = 1.50 * productQuant;
    } else if (product === 'water') {
        sum = 1.00 * productQuant;
    } else if (product === 'coke') {
        sum = 1.40 * productQuant;
    } else {
        sum = 2.00 * productQuant;
    }
    console.log(sum.toFixed(2));
}
