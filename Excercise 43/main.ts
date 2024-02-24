// Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const showMagicians=(magicians: string[]): void=> {
    magicians.forEach(magician=>{
            console.log(magician)
    })
}
const newArray=(magicians:string[]):string[]=>{
    let newMagicians:string[]=[...magicians]
    let newMagiciansArray=newMagicians.map((magician,i)=>{
      return newMagicians[i]=`Great to ${magician}`
    })
    return newMagiciansArray
}

const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let newMagicians=newArray(magicianNames)
console.log("Original Array")
showMagicians(magicianNames)
console.log("\nNew Array\n")
showMagicians(newMagicians)
