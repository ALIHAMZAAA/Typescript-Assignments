// Q41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const showMagicians=(magicians: string[]): void=> {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
showMagicians(magicianNames);

