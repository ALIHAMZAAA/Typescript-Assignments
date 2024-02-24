// Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
const makeShirt=(size: string = 'large',message:string=''): void=>{
    message = (size === 'large' || size === 'medium') ? 'I love TypeScript' : message;
    console.log(`Creating a ${size} shirt with the message: ${message}`);
}

makeShirt();
makeShirt('medium')
makeShirt('medium',"I lover programming");
makeShirt('small', 'I love JavaScript!');
makeShirt('small',"I love Programming")



