// Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Faiq", "Aymen", "Hanan"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], "\n\tIt is our pleasue to invite you in to our party\nThankyou!"));
}
