//! Lots of different ways my first idea was to do it w/ .splice() since we covered that, we could also use .filter(), or use .includes() and .replace() and never convert into an array. Lets look @ some examples

/**
 * TODO: String methods + splice + loop
 */
var str1 = '            hello       world           ';
str1 = str1.trim();
str1 = str1.toLowerCase();
str1 = str1.split('');
for (var i = 0; i < str1.length; i++) {
	if (str1[i] === ' ') {
		str1.splice(i, 1);
		i--;
	}
}

/**
 * TODO: String methods + push + loop
 */
var str2 = '            hello       world           ';
str2 = str2.trim().toLowerCase().split('');
var parsedStr = [];
for (var i = 0; i < str2.length; i++) {
	if (str2[i] !== ' ') {
		parsedStr.push(str2[i]);
	}
}

/**
 * TODO: String methods + filter (Intermediate)
 */
var str3 = '            hello       world           ';
str3 = str3.trim().split('');
str3 = str3.filter((char) => char !== ' ');

/**
 * TODO: String methods only (.includes() & .replace())
 */
var str4 = '            hello       world           ';
while (str4.includes(' ')) {
	str4 = str4.replace(' ', '');
}
