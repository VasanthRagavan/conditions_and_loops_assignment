// Loops are fundamental constructs in programming that allow you to execute a block of code repeatedly based on a condition. They are essential for automating repetitive tasks, iterating over data structures, and managing control flow in programs.
// why need loops
// Automation: Loops enable you to perform repetitive tasks without having to write the same code multiple times.
//Efficiency: They help reduce the code length and avoid redundancy.
//Iteration: Loops allow you to process items in data structures like arrays, lists, or objects.

//example
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
i =0 
while (i < 5) {
    console.log("Iteration:", i);
    i++;
}

i = 0;
do {
    console.log("Iteration:", i);
    i++;
} while (i < 5);

const student = {name: "John", age: 25, grade: "A"};
for (let key in student) {
    console.log(key + ": " + student[key]);
}


