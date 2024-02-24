// Q44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following ingredients:");
    if (toppings.length === 0) {
        console.log("Just bread, it's a plain sandwich.");
    }
    else {
        toppings.forEach(function (topping, index) {
            console.log("".concat(index + 1, ". ").concat(topping));
        });
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different number of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich();
