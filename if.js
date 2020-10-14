// if (/* conditional statement that evaluates to true or false */) {
//     // code block
// }

if (false) {
	console.log('hello from the if stmt');
} else if (false) {
	console.log('Hello from elseif 1');
} else if (true) {
	console.log('hello from the else stmt');
} else {
	console.log('hello from the else stmt');
}

// Available combos
// if(true) {

// }

// if(true) {

// } else {

// }

// if(true) {

// } else if(true) {

// } else if(true) {

// }

// if(true) {

// } else if(true) {

// } else if(true) {

// } else {

// }

if (5 <= 15) {
	console.log('true stmt');
} else {
	console.log('false stmt');
}

// == comparison === strict or type comparison >, <, <=, >=, != not equal, !== not equal strict/type

var str1 = 'abc';
var str2 = '123';
var str3 = 'cereal';

if (str1.length === str2.length) {
	console.log('same length!');
}

if (2 + 2 === 4) {
	console.log('hello world');
}

console.clear();

if (!true) {
	console.log('if');
} else {
	console.log('else');
}

var num = 5;

if (num !== '5') {
	console.log('happy birthday');
} else {
	console.log('not your b-day');
}

// logical operators ! NOT, && and, || or
if (false || (!false && false) || false) {
	console.log('true...');
} else {
	console.log('false...');
}

console.clear();

// nest if statements
if (true) {
	console.log('outer if');
	if (false) {
		console.log('inner if');
	} else {
		console.log('else');
	}
	console.log('end of the if stmt');
} else if (false) {
	console.log('else if #1');
} else if (true) {
	console.log('else if #2');
} else {
	console.log('else');
}

// if(true) { console.log('stuff')} else { console.log('else') } // this works just really ugly and a lot of ppl don't use it
// ternary operators for inline if stmts
true ? console.log('true') : console.log('false');

// nest ternary operations
false ? console.log('true') : true ? console.log('true') : console.log('false');

console.clear();

// truthy & falsy
var unassigned = '';

if (unassigned) {
	console.log('hello world');
} else {
	console.log('hello');
}

console.clear();

// switch stmts
var choice = 'katana';

if (choice === 'rock') {
	console.log('you chose rock');
} else if (choice === 'paper') {
	console.log('you chose paper');
} else if (choice === 'scissors') {
	console.log('you chose scissors');
} else {
	console.log("You can't choose that");
}

switch (choice) {
	case 'rock':
		console.log('you chose rock');
		break;
	case 'paper':
		console.log('you chose paper');
		break;
	case 'scissors':
		console.log('you chose scissors');
		break;
	default:
		console.log("You can't choose that");
		break;
}
