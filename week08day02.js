// Write a program to pass spread operator as argument and rest operator as parameter of a
// function.

// This is a simple program to pass spread operator as argument and rest operator as parameter:
function rest(a, b, ...c) {
    console.log(a)
    console.log(b)
    console.log(c)
}
arr = ["Hello!", "Below down is a array which is printed using spread operator as an argument:", 3, 4, 5, 6, 7, 8]
rest(...arr)