/**
 * STRINGS
 */
var str = 'something else';
str = 'even something more elsey'; // overwriting the value of str \
var str2 = 'Harcourt gets his house';
str = str2;
str2 = 'Harcourt definitely gets his house';

// write the value of whatever is in the str box to the console
// console.log(str); // whats going to be written to the console.
// console.log(str2);

// some neat string things to know
var str3 = "I'm happy";
str3 = '"This is a quote"';
str3 = `This is a string`; // this syntax we want to use later

str3 = 'hello\n\nworld'; // new line
// str3 = 'hello\tworld'; // tab

// CONCATENATION
// str2 = 'hello';
// str3 = 'world';

// console.log(str2 + str3 + ' ' + '!');

// console.log(str3);

str3 = 'var typeof %&$###@ *'; // strings can hold any characters, like all of them

/**
 * NUMBERS
 */
var num = 1; // positive integers
num = 2.5;
num = -2;
num = -2.5;
num = 0.1234567890123456789;

num = 2 + 2;

var num1 = '5';
var num2 = 2;
var num3 = num2 + num1;

// console.log(num1, '\n', num2);
// console.log(num3);

/**
 * BOOLEAN
 */
var bool = true;
bool = false;

/**
 * I can change types at will nothing bad happens
 */

bool = 'hello world';

/**
 * UNDEFINED / NULL / NaN
 */

var undef = NaN;
// console.log(undef);

// console.log(undef);

/**
 * OBJECTS
 */

var obj = { key: 5 };
obj = {
	key: 5,
	key2: 'hello world',
	key3: true
};
console.log(obj.key); // 5
console.log(obj.key2); // hello world
console.log(obj.key3); // true
console.log(obj); // look at whole object

// append a a property to an object
obj.key4 = false;

console.log(obj.key4); // false
console.log(obj);
console.log(typeof obj);
