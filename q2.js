let marks = 56;

let grade;
if (marks > 90) {
    grade = 'A';
} else if (marks >= 70 && marks <= 90) {
    grade = 'B';
} else if (marks >= 50 && marks < 70) {
    grade = 'C';
} else {
    grade = 'F';
}

console.log(`The grade for the student is: ${grade}`);
