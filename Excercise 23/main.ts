// Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'subaru';

// Test 1: Check if car is 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

// Test 2: Check if car is 'ford'
console.log("Is car == 'ford'? I predict False.");
console.log(car == 'ford'); // False

// Test 3: Check if car is not 'toyota'
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // True

// Test 4: Check if car is not 'subaru'
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False

// Test 5: Check if car starts with 's'
console.log("Does car start with 's'? I predict True.");
console.log(car.startsWith('s')); // True

// Test 6: Check if car ends with 'u'
console.log("Does car end with 'u'? I predict True.");
console.log(car.endsWith('u')); // True

// Test 7: Check if car contains 'bar'
console.log("Does car contain 'bar'? I predict True.");
console.log(car.includes('bar')); // True

// Test 8: Check if car contains 'ford'
console.log("Does car contain 'ford'? I predict False.");
console.log(car.includes('ford')); // False

// Test 9: Check if car is Undefined
console.log("Is car Undefined? I predict False.");
console.log(car === undefined); // False

// Test 10: Check if car is not null
let car2 = null;
console.log("Is car2 not null? I predict False.");
console.log(car2 !== null); // False
