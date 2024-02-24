//Q22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits[3].toUpperCase()); // This will produce an error because fruits[3] is undefined

// Correcting the error by checking if the element exists .
if (fruits[3]) {
    console.log(fruits[3].toUpperCase());
} else {
    console.log("Element at index 3 does not exist");
}