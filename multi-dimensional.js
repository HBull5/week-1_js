/**
 * Multi-dimensional arrays
 */

var arr = ['string', 1, true, ['a', 'b', 'c', [1, 2, ['snow', 'sun'], 3]]];

// console.log(arr);

console.log(arr[0]); // return string
console.log(arr[3][3][1]); // return 2
console.log(arr[3][2]); // return c
console.log(arr[3][3][2][1]); // return sun

const name = 'harcourt';

// name = 'nick';

const arrayOfThings = ['a', 'b', 'c'];

arrayOfThings.push('d');
