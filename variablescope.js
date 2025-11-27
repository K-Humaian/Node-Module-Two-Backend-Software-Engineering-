function print()
{
    let x = 10;
    // console.log(x); // Can not access 'x' outside its scope of print function
    console.log("Inside print function: " + x);
}

function display(data)
{
    const age = 30; // Declare age to avoid accidental global variable
    const y = 20;
    // y = 24; // This will cause an error because y is a constant and cannot be reassigned.
    console.log("Inside the display function: " + y)
    return age; // Return age from display function
}

print();
 const age = display(); // Capture the returned age
console.log("Outside the display funtion: " + age);
// console.log(x)


