console.log(Math); // log the whole Math object

console.log(Math.PI); // PI property of the Math object returns 3.14~~~~~~

var value = 'hello';
console.log(Math.round(5)); // return 5
console.log(Math.round(5.5)); // return 6
console.log(Math.round(5.4)); // return 5
console.log(Math.ceil(5)); // return 5
console.log(Math.ceil(5.4)); // return 6
console.log(Math.ceil(5.1)); // return 6
console.log(Math.floor(5.9)); // return 5
console.log(Math.sqrt(36)); // return 6
console.log(Math.abs(5.5)); // return 5.5
console.log(Math.abs(-5)); // return 5

console.clear(); // clears console, remove this to see all of the above code in the console

console.log(3 ** 2); // return 9
// console.log('hello' + ' ' + 'world'); // demo to see we can pass in multiple things to console.log() we just separate them w/ a comma
// console.log('hello', 'world', 5, '5');
console.log(Math.pow(2, 3)); // return 8

console.log(Math.min(2, 4)); // return 2
console.log(Math.min(2, 4, 6, 1)); // return 2 // separate parameters w/ commas

console.log(Math.max(100, 3, 999, 1001));
console.log(Math.max(1001));

console.log(Math.random()); // generate a random number

/**
 * Generate a random number between 1 - 10
 */
console.log(Math.floor(Math.random() * 10) + 1); // works from inner parenthesis out
