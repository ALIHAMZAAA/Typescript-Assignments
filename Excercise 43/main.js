var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var showMagicians = function (magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
};
var newArray = function (magicians) {
    var newMagicians = __spreadArray([], magicians, true);
    var newMagiciansArray = newMagicians.map(function (magician, i) {
        return newMagicians[i] = "Great to ".concat(magician);
    });
    return newMagiciansArray;
};
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var newMagicians = newArray(magicianNames);
console.log("Original Array");
showMagicians(magicianNames);
console.log("\nNew Array\n");
showMagicians(newMagicians);
