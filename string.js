var str1 = 'hello';

var str2 = 'world';

console.log(str1 + ' ' + str2); // add in the space

console.log('hello' + ' ' + 5); // convert

console.clear();

var str3 = ''; // assign str3 to an empty string
// str3 = [1, 2 , 3]; // you can always reassign values
// str3 = str1;
// str3 = str2;
str3 += str1;
str3 += ' ';
str3 += str2;
str3 += '!';
console.log(str3);

// escape quotes
str4 = "'";
str4 = "''";
str4 = '""';
str4 = `'""'`;
str4 = '\n';
str4 = '\t';

console.clear();

// .length counts the # of characters
console.log(str1.length);

// to upper case
console.log(str1.toUpperCase());
console.log(str1); // what I'm getting here?
str1 = str1.toUpperCase();
console.log(str1); // now we've made it permenant

// to lower case
str1 = str1.toLowerCase();
console.log(str1);

str1 = '           hello           world               ';

console.log(str1);
console.log(str1.trim()); // trim removes leading & trailing whitespace from a string

console.clear();

str1 = 'hello world';
console.log(str1[1]); // returns 'e'

console.log(str1[str1.length - 1]); // d
console.log(str1[2 + 2]); // 0
str1[0] = 'f'; // This does not work
console.log(str1);

console.log(str1.indexOf('e')); // 1
console.log(str1.indexOf('o')); // 4

console.log(str1.charAt(0)); // h
console.log(str1[0]); // <-- does same thing looks a little cleaner

console.clear();

console.log(str1.slice(0, 5));
// str1 = str1.slice(0, 5);
console.log(str1);

str1 = 'hello world my name is Harcourt';

var strArr = str1.split(' ');
console.log(strArr);

// separate every character into an array of strings
strArr = str1.split('');
console.log(strArr);

console.clear();

/**
 * Come back to this in loops
 */
// remove all white space from string
str1 = '            heLlo       WoRld            ';
str1 = str1.trim(); // remove trailing and leading white space
str1 = str1.toLowerCase();
str1 = str1.split(' ');
for (var i = 0; i <= str1.length; i++) {
	if (str1[i] === '') {
		str1.splice(i, i + 1);
		console.log(str1[i]);
	}
}
str1 = str1.join(' ');
console.log(str1);

console.clear();

str1 = 'hello world';

console.log(str1.includes('o')); // true
console.log(str1.includes('z')); // false
console.log(str1.includes('hello ')); // true
console.log(str1.includes('hello  ')); // false
