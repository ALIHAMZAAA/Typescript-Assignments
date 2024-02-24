// Q25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var color = ['green', 'red', 'blue'];
var alien_color = color[Math.round(Math.random() * 2)];
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
// This block won't be executed because the condition is false
if (alien_color === 'red' || alien_color === 'blue') {
}
