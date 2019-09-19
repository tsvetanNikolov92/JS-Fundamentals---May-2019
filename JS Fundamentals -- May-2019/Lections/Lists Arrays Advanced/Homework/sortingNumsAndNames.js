let nums = ['1', '11', '2', '33', '6'];
let names = ['Alpha', 'Gama', 'Beta'];
//Alphabetical
let sortedNames = names.sort((a, b) => a.localeCompare(b));

//Ascending
let sortedNumsAsc = nums.map(Number)
    .sort((a, b) => a - b);

//Descending
let sortedNumsDesc = nums.map(Number)
    .sort((a, b) => b - a);


console.log(sortedNumsAsc);
console.log(sortedNumsDesc);
console.log(sortedNames);