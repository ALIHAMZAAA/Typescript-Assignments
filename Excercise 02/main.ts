//  Q2:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName: string = prompt("What's your name?") || ""
if (personName !== "") {
    alert(`“Hello ${personName}, would you like to learn some Python today?”`)
} else {
    alert("Please Enter your name")
}
