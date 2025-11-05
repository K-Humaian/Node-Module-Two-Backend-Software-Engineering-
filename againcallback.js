// again learning the callback function in JavaScript.
// A callback function is a function passed into another function as an argument,


function display(result){
    console.log("Display with the callback: " + result);
}

function calculator(n1, n2, callback){
    let sum = n1 + n2;
    if(callback)
        callback(sum)
    return sum;
}

result = calculator(3, 100, display);
console.log("Display without the callback: " + result);

console.log("Another callback example ------------------------------------------------------------------------")


function greet(requiregreet){
    console.log("I am fine , How are you?")
}

function firstgreet(callbackgreet){
    console.log("Hello! how are you?");
    if(callbackgreet)
        callbackgreet();
}
firstgreet(greet)
