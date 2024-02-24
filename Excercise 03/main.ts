// Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName :string="Ali Hamza"
let titleCase=personName.split(' ').map((word)=>{return word[0].toUpperCase()+word.slice(1).toLowerCase()}).join(' ')
console.log(` LowerCase : ${personName.toLowerCase()}\n UpperCase : ${personName.toUpperCase()}\n TitleCase : ${titleCase}`)