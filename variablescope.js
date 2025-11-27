function print()
{
    let x = 10;
    // console.log(x); // Can not access 'x' outside its scope of print function
    console.log("Inside print function: " + x);
}

function display(data)
{
    age = 30; // y is declared without var, let or const, so it becomes a global variable
    const y = 20;
    // y = 24; // This will cause an error because y is a constant and cannot be reassigned.
    console.log("Inside the display function: " + y)
}

print();
display();
console.log("Outside the display funtion: " + age);
// console.log(x)


