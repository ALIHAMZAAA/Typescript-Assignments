//Q29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Make an array of your three favorite fruits
var favourite_fruits = ["banana", "apple", "strawberry"];
// Write five if statements to check for certain fruits in your array
if (favourite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favourite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favourite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favourite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
else {
    console.log("You don't like oranges as much.");
}
if (favourite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}
else {
    console.log("You don't like grapes as much.");
}
