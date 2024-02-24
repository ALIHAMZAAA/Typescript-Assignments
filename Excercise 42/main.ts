// Q42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const make_great=(magicians: string[]): void=> {
    let b= magicians.forEach((magician,i)=>{
        magicians[i]=`Great to ${magician}`
        if(i===magicians.length-1){
            console.log(magicianNames)
        }
    })
}

const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great(magicianNames)

