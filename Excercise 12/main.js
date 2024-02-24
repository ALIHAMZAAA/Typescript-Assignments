// Q12: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friendNames = ["Haroon", "Rohan", "Faiq", "Uzaifa", "Maeed"];
friendNames.forEach(function (Fname) {
    console.log("Hello Good Morning ".concat(Fname));
});
