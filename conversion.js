/**
 * Number Conversion
 */
var num1 = '5.5';
var num2 = 5;

var num3 = num1 + num2; // returns 55
num3 = Number(num1) + num2; // returns 10.5
num3 = parseInt(num1) + num2; // returns 10
num3 = parseFloat(num1) + num2; // returns 10.5
num3 = parseInt(true) + num2; // NaN

console.log(num3);

/**
 * String conversion
 */

var num4 = 26;
var str = 'Hello I am';

// console.log(str + ' ' + String(num4)); // this is one we can do this
console.log(str + ' ' + num4.toString());

/**
 * Type Coercion
 */
console.log('5' + '5'); // 55
console.log(5 + '5'); // 55 javascript takes our number and turns it into a string for us
console.log(str + ' ' + num4);

console.log(Number(true) + 5);
