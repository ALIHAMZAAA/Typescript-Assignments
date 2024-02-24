// Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. 
var guestList = ["Faiq", "Aymen", "Hanan"];
guestList.splice(1, 0, "Noman");
guestList.unshift('Abdullah'); // append is not the method of JS .
guestList.push('Manan');
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], "\n\tIt is our pleasue to invite you in to our party\nThankyou!\n"));
    if (i === guestList.length - 1) {
        console.log("I Found a bigger table");
    }
}
