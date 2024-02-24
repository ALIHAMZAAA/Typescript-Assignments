// Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case functiom
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Equality and inequality with strings
const string1: string = "apple";
const string2: string = "orange";
console.log("Equality with strings:");
console.log(string1 === string1); // True
console.log(string1 !== string2); // True
console.log(string1 === "Apple"); // False
console.log(string1 !== string1); // False

// Tests using the lower case function
const upperCaseString: string = "HELLO";
const lowerCaseString: string = "hello";
console.log("\nLower case function:");
console.log(upperCaseString.toLowerCase() === lowerCaseString); // True
console.log("World".toLowerCase() === "world"); // True
console.log("Hello".toLowerCase() === lowerCaseString); // True
console.log("WORLD".toLowerCase() === "world"); // True

// Numerical tests
const num1: number = 5;
const num2: number = 10;
console.log("\nNumerical tests:");
console.log(num1 === num1); // True
console.log(num1 !== num2); // True
console.log(num2 > num1); // True
console.log(num1 < num2); // True
console.log(num2 >= num2); // True
console.log(num1 <= num2); // True

// Tests using "and" and "or" operators
const bool1: boolean = true;
const bool2: boolean = false;
console.log("\nTests using 'and' and 'or' operators:");
console.log(bool1 && bool1); // True
console.log(bool1 && bool2); // False
console.log(bool2 || bool1); // True
console.log(bool2 || bool2); // False

// Test whether an item is in an array
const fruits: string[] = ["apple", "banana", "orange"];
const fruit1: string = "apple";
const fruit2: string = "grape";
console.log("\nTest whether an item is in an array:");
console.log(fruits.includes(fruit1)); // True
console.log(fruits.includes(fruit2)); // False

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!fruits.includes(fruit2)); // True
console.log(!fruits.includes(fruit1)); // False

