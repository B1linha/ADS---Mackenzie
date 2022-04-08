/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. */


function sumDigits(number) {
    let arr = Math.abs(number).toString().split('')
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++)
      sum += +arr[i]
    return sum;
  }

// A função Math.abs(x) retorna o valor absoluto de um número
// Math.abs retorna Nan em string não númerica e 0 em null
/* Ex:
Math.abs('-1'); return 1
Math.abs(-2); return 2
Math.abs(null); return 0
Math.abs([1,2]); return NaN
*/