// Q42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var make_great = function (magicians) {
    var b = magicians.forEach(function (magician, i) {
        magicians[i] = "Great to ".concat(magician);
        if (i === magicians.length - 1) {
            console.log(magicianNames);
        }
    });
};
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great(magicianNames);
