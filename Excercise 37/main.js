// Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
var makeShirt = function (size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = ''; }
    message = (size === 'large' || size === 'medium') ? 'I love TypeScript' : message;
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(message));
};
makeShirt();
makeShirt('medium');
makeShirt('medium', "I lover programming");
makeShirt('small', 'I love JavaScript!');
makeShirt('small', "I love Programming");
