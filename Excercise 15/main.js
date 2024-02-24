// Q 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestList = ["Faiq", "Aymen", "Hanan"];
var absent_Guest = guestList[2];
var new_Guest = "Abdullah";
guestList[2] = new_Guest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], "\n\tIt is our pleasue to invite you in to our party\nThankyou!\n"));
    if (i === guestList.length - 1) {
        console.log("\n".concat(absent_Guest, " can't attend the party due to some issue"));
    }
}
