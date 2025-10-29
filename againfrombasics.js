// There is no main functions in javascript, it is a scripting language.
// You can imagine that there is an unseen main function.
// The by default scope of JS is a global scope.
// Scope means accessability of a variable. Means in which places of a code you can access a variable.

const { resourceUsage } = require("process");

console.log("I am again learning the basics for not giving up on my dream")
x = "Md. Humaian Kabir"

function names(){
    console.log(x);
}
names()

// Functions are treated as first class citizen in JS.
// Means you can treat a function just like the value of variable.

y = function eham(){
}

console.log(y);

function printanything(v1, v2){
    console.log(v1, v2);
}

printanything(function (){}, function (){})

// Higher order functions means functions can treated as argument and also return a function.

function tuining(fn1, fn2)
{
    console.log("Its a higher order function")
    console.log(fn1, fn2)
    names();
    printanything("Eham", "Moumita");
    return function hi(){};
}

tuining(names , printanything)

az = tuining(1, 3);
console.log("Showing the returned funtion ---> ",az)

// Pure function = Same type of input er jonno same type of output

function add(a , b)
{
    return a + b ;
}
g = add(2, 2);
console.log(g)


/* 
- A closure is created when a function is defined inside another function and accesses variables from the outer function.
- Even after the outer function has returned, the inner function still has access to the outer function’s variables.
*/

function outer(){
    outervar = "I am in the outer scope"
    return function inner(){
        console.log(outervar);
        outervar = "Updated";
    }
}

closure = outer();
closure();
closure();

// So here, inner function is the closure function.

