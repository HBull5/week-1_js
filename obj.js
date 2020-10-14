// make an object
var obj = { key: 'value' };

var obj2 = {
	key1: 'value1',
	key2: 'value2',
	key3: 3,
	key4: [1, 2, 3, ['a', 'b', 'c']],
	key5: {
		nested1: 'nest',
		nested2: 'nest'
	}
};

console.log(obj);

console.log(obj2);

console.log(obj2['key1']); // accessing a property
console.log(obj2.key2); // dot notation most popular for accessing data

obj2.key1 = 'swarm';

console.log(obj2.key1);

console.clear();

console.log(Object.keys(obj2)); // give us all of the keys
console.log(Object.values(obj2)); // give us all of the values, including nested ones
console.log(Object.entries(obj2)); // give us all entries
console.log(obj2.hasOwnProperty('key1')); // true
console.log(obj2.key1);
