// Q27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
let color:string[]=['green','yellow','red']
let alien_color:string = color[Math.round(Math.random()*2)]

                          // 1st form 
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}else{
    if(alien_color==='yellow'){
        console.log("The player just earned 10 points.");
    }else{
        console.log("The player just earned 15 points.");
    }
}

                          // 2nd form 
if(alien_color==='green'){
    console.log("The player just earned 5 points.");
}else if( alien_color==='yellow'){
    console.log("The player just earned 10 points.");
}else{
    console.log("The player just earned 15 points.");
}

//                                    3rd form
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
if( alien_color==='yellow'){
    console.log("The player just earned 10 points.");
}
if (alien_color === 'red') {
    console.log("The player just earned 15 points.");
}
