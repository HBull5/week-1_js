// infinite
// console.log('test');

// while (true) {
// 	// does stuff
// 	break;
// }

// var done = false;
// var counter = 0;

// while (!done) {
// 	counter++;
// 	console.log(counter);
// 	if (counter === 3) {
// 		done = true;
// 	}
// }

// var counter = 0;
// while (true) {
// 	counter++;
// 	console.log(counter);
// 	if (counter === 3) {
// 		break;
// 	}
// }

// decrement counter--
// counter = counter + 1 same as counter++ same as counter += 2 -= *=

// look do while on your time, try cover at the end

// for loops
// for(/* var/counter deceleration; conditional stmt; iterator */) {
// 	// code block
// }

var arr = ['horse', 'cat', 'monkey', 'panda', 'coconut', 'zebra', 'elephant']; // length = 3

// console.log(arr.length);

// for (var i = arr.length - 1; i >= 2; i--) {
// 	// console.log(i);
// 	// console.log(arr[i]);
// 	arr[i] = 'peas';
// }

// console.log(arr);

// nested for loops
// arr = [
// 	[1, 2, 3],
// 	[4, 5, 6]
// ];

// nested for loops are bad, but were learning so feel free to use them
// for (var i = 0; i < arr.length; i++) {
// 	for (var j = 0; j < arr[i].length; j++) {
// 		console.log(arr[i][j]);
// 	}
// }

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === 'monkey') {
		// break; // short circuits the loop
		continue; // stops execution in the code block and starts the next iteration
	}
	console.log(arr[i]);
	continue;
}
