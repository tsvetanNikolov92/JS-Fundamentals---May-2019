function sumDigits(number) {
   let numAsString = number.toString();
   let sum = 0;

   for (let i = 0; i < numAsString.length; i++) {
       let digit = numAsString[i];
       digit = Number(digit)
       sum += digit
   }
   console.log(sum)
}

sumDigits(245678)