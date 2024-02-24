// Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ["Faiq", "Aymen", "Hanan"];
guestList.splice(1, 0, "Noman");
guestList.unshift('Abdullah');
guestList.push('Manan');
console.log(guestList);
console.log("I can invite only two people because new dinner table won't arrive in time for the dinner.");
for (var i = guestList.length - 1; i >= 0; i--) {
    if (i > 1) {
        var removeGuest = guestList.pop();
        console.log("\n".concat(removeGuest, " :I am  sorry. I can not invite you to dinner."));
    }
    else {
        console.log("\n".concat(guestList[i], ": You are still invited"));
        guestList.pop();
        if (i === 0) {
            console.log('\nAt the end array is :', guestList);
        }
    }
}
