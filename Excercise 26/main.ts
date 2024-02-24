//  Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let color:string[]=['green','red','blue']
let alien_color:string = color[Math.round(Math.random()*2)]

//                        1. if else
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}else{
    console.log("The player just earned 10 points.");
}
//                         2. if if 
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
if (alien_color === 'red' || alien_color==='blue') {
    console.log("The player just earned 10 points.");
}
