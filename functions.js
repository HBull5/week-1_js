// function deceleration
// function myFunction() {
// 	console.log('hello world');
// 	console.log('hello more worlds');
// }

// calling the function
// myFunction();

// baking a cake function
// function makeCake(eggs, milk, flour) {
// 	var cake;
// 	cake += eggs;
// 	cake += milk;
// 	cake += flour;
//     // bake cake
//     return cake;
// }

// function add(x, y) {
// console.log(x + y);
// console.log('x: ' + x);
// console.log('y: ' + y);
// console.log(arguments[2]); //? this is kinda high level not super important to understand now. Rest & spread.
// }

// add(1, 3); // returns 4 var x = 1; var y = 3;
// add(2, 2); // returns 4 var x = 2; var y = 2;

// function writeToConsole(str) {
// 	console.log(str);
// }

// writeToConsole('hello world');
// writeToConsole('Happy Birthday!');

// add(1); // var x = 1; var y = undefined; 1 + undefined = NaN

// add(2, 2, 'string'); // this still works even though we passed to many

// function foo(str1, str2) {
// 	// return str1 + ' ' + str2;
// 	// return; //? return short circuits the control structure
// 	return [str1, str2];
// 	console.log(str1 + ' ' + str2);
// }

// console.log(foo('hello', 'world') /* = 'hello world' */);

// IIFE immediately invoked function expression
// (function bar() {
// 	console.log('foo bar');
// })();

// you cannot nest function declarations
// function foo() {
// 	console.warn('Everything foobar');
// 	// (function bar() {
// 	// 	// this is wrong
// 	// 	console.log('hello world');
// 	// })();
// 	console.log('hello world');
// }

// foo();

// callback functions
// function foo() {
// 	bar('foo'); // callback function
// }

// function bar(str) {
// 	console.log(str + 'bar');
// }

// foo();

// anonymous function is just a function w/ out a name
// var foo = function () {
// 	console.log('hello world');
// };

// foo();
