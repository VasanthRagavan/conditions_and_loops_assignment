// Conditional statements are a fundamental concept in programming that allow you to execute different code blocks based on certain conditions.These statements evaluate a condition (a boolean expression)  and then execute specific code depending on whether the condition is true or false.

const a = 10;

// if statement
if (a == 10) {
    // Execute this block if the condition is true
    console.log("a is equal to 10");
}

// if-else statement
if (a > 15) {
    // Code to execute if the condition is true
    console.log("a is greater than 15");
} else {
    // Code to execute if the condition is false
    console.log("a is not greater than 15");
}

// if-else if-else (elif) statement
if (a > 15) {
    // Code to execute if condition1 is true
    console.log("a is greater than 15");
} else if (a == 10) {
    // Code to execute if condition1 is false and condition2 is true
    console.log("a is equal to 10");
} else {
    // Code to execute if both condition1 and condition2 are false
    console.log("a is not greater than 15 and not equal to 10");
}

// switch statement
const value1 = 'b';
const value2 = 'c';
switch('a') {
    case value1:
        // Code to execute if the expression matches value1
        console.log("The value is 'b'");
        break;
    case value2:
        // Code to execute if the expression matches value2
        console.log("The value is 'c'");
        break;
    default:
        // Code to execute if the expression doesn't match any case
        console.log("The value is not 'b' or 'c'");
}
