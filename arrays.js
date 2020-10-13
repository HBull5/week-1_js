var var1 = 'hello';
// console.log(var1);

var arr = [];
// console.log(arr);

var arr1 = ['hello', 'world']; // we can have multiple items in our arrays & they are indexed numerically starting at 0
console.log(arr1);
console.log(arr1[1]); // return 'world'

arr1 = [true, false, 'hello', 5, 5 + 5]; // You can stick any mixture of data types
console.log(arr1[4]);

console.log(arr1.length); // it will the number of entries in our array

arr1[1] = true; // overwrote the value of index 1 from false to true
console.log(arr1);

// arr1 = 'hello world';

// [ true, true, 'hello', 5, 10 ]

console.log(arr1.indexOf(5)); // returns 3
console.log(arr1.indexOf(true)); // returns 0 find the first instance doesn't keep looking afterwards
console.log(arr1.indexOf('turtle')); // returns -1

/**
 * Pretend this doesn't exist
 */
// arr1[-1] = 'ghost';
// console.log(arr1[-1]); // error no index of -1, I'm wrong actually returns undefined
//? Associative array, much PHP, such wow
// arr1['steve'] = 'jobs';
// console.log(arr1['steve']);
/**
 * Pretend this doesn't exist
 */

console.log(arr1[1 + 1]); // return hello, you can evaluate expressions inside the square brackets

// arr1[5] = 'hello';
arr1[arr1.length] = 'hello'; // arr1.length evaluates to 5, .length will always be one greater than the greatest index
console.log(arr1); // [ true, true, 'hello', 5, 10, 'hello' ]

arr1.push('steve'); // [true, true, 'hello', 5, 10, 'hello', 'steve']
console.log(arr1);

arr1.pop(); // remove steve from the end of our array
// arr1[arr1.length - 1] = '';
console.log(arr1);

console.clear();

arr1.unshift('front');
// arr1[0] = 'front';
console.log(arr1);

arr1.shift();
console.log(arr1);

arr2 = ['a', 'b', 'c', 1, 2, 3];
arr3 = [4, 5, 6];
var arr4 = arr1.concat(arr3, arr2);
console.log(arr4);
console.log(arr1, arr2, arr3);

console.clear();

arr1 = ['a', 'b', 'c'];

// splice works kinda like cut and slice works kind of like copy

// splice can be used to add in data, remove data, or modify data in an array
// arr1.splice(0, 1); // removing the first element of the array
// arr1.splice(1, 2); // removing the last two elements of the array
// arr1.splice(1, 0, 'apples', 'bananas'); // a apples bananas b c
// arr1.splice(1, 1, 'banana'); // a banana c modified our array
var whatWasCutOut = arr1.splice(1, 2); // [ b, c ]
console.log(whatWasCutOut);
// arr1 a c

console.log(arr1);

console.clear();

arr1 = ['a', 'b', 'c'];

console.log(arr1.slice(0, 2)); // a b
console.log(arr1.slice(1, 2)); // return b
var arr2 = arr1.slice(1, 2);
console.log(arr2); // b
console.log(arr1);
