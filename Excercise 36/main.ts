// Q36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
const makeShirt=(size:number,message:string):void=>{
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}
makeShirt(8, "Hello, World!");

