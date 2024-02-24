//  Q2:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = prompt("What's your name?") || "";
if (personName !== "") {
    alert("\u201CHello ".concat(personName, ", would you like to learn some Python today?\u201D"));
}
else {
    alert("Please Enter your name");
}
