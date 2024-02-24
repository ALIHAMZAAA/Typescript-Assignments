// Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Ali Hamza";
var titleCase = personName.split(' ').map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
console.log(" LowerCase : ".concat(personName.toLowerCase(), "\n UpperCase : ").concat(personName.toUpperCase(), "\n TitleCase : ").concat(titleCase));
