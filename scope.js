// // scope = what context of visibility your variables/functions/etc/etc can see who can see them

// // key terms: lexical scope, global scope, function scope, block scope, hoisting

// // global scope
// var global = 'globe';

// // function scope
// function foo() {
// 	console.log(global);
// 	var functionScope = 'function';
// }

// function bar() {
// 	var functionScope = 'function';
// }

// foo();

// // console.log(functionScope);

// if (true) {
// 	var truth = true; //
// }

// console.log(truth); // error? || console.log(true)

// // global scope anything not nested, function scope is anything between {} in a function, block scope is anything else between { }

// if (false) {
// 	// block
// }

// // while(false) {
// //     // block
// // }

// for (var i = 0; i < 2; i++) {
// 	// block
// 	var x = 1;
// }

// console.log(x);

//! modifying variable in the global scope

// var global = 'thing #1';
// var arr = [1, 2, 3];

// function foo() {
// 	global = 'thing #2';
// 	arr.push(4);
// }

// foo();

// console.log(global, arr);

//! hoisting javascript specific, the takeaway alway define variables

console.log(x); // write console
x = 1; // assigned a variable
var x; // declared
var x = 1;
