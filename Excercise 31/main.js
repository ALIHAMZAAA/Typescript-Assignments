// Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Correction : Excercise no 30 not 28
var admin = "Ali Hamza";
var userNames = ['Ali', 'Fatima', admin, 'Omar', 'Aisha', 'Muhammad'];
userNames = [];
if (userNames.length >= 1) {
    userNames.forEach(function (Name) {
        if (Name !== admin) {
            console.log(" Hello ".concat(Name, ", thank you for logging in again."));
        }
        else {
            console.log(" Hello admin(".concat(admin, "), would you like to see a status report?"));
        }
    });
}
else {
    console.log("We need to find some users");
}
