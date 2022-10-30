// Q-1) Write a function that would take one variable as a parameter and log on the screen using
// Template Literal Interpolation
// Q-2) Write a tagged function to print the following sentence: Homework must be at least 80% to
// ensure my future. Attendance must be at least 80% to ensure my success. 1 variable for
// Homework/Attendance. 1 variable for 80 (percentage). 1 variable for future/success.
fix1 = '80%';
fix2 = ['future', 'success'];
fix3 = ['Homework', 'Attendance'];

function myTag(percent) {
    if (percent >= 80) {
        console.log(`${fix3[0]} must be atleast ${fix1} to ensure my ${fix2[0]} . ${fix3[1]} must be atleast ${fix1} to ensure my ${fix2[1]}`)
    }
}
myTag(80)

let name = 'Saif Ali khan';
let name2 = 'Hritik Roshan';
let text = `Name ${name} , ${name2}!`;
console.log(text);