// Q - 1) Write a program to print the sum of right diagonal of a matrix
// Q - 2) Write a program to print sum of border elements of a square Matrix
// Q - 3) Write a function to return sum of rows of a matrix as an array.


mat = [
    [1, 5, 3, 6],
    [6, 5, 7, 2],
    [5, 5, 4, 2],
    [5, 8, 5, 3]
]

let n = mat.length;
let m = mat[0].length;

// quest -1
let sum = 0;
for (let j = 0; j < m; j++) {
    sum += (mat[j][n - j - 1]);
}
console.log("Sum of right diagonal: ", sum)
    //ques-2
count = 0;
for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {

        if (i == 0 || i == m - 1) {
            c = mat[j][i]; //if we wan to print row of index 2 swap j and 1
            count += c;
        }
    }
}
// sum of rows
for (let i = 0; i < n; i++) {
    if (i == 0 || i == n - 1) {
        k = mat[i].reduce((acc, val) => acc + val);
    }
}
console.log("sum of border elements: ", count + k)
    //quest 3
function sumOfrows() {
    for (let i = 0; i < n; i++) {
        if (i == 0 || i == n - 1) {
            q = mat[i].reduce((acc, val) => acc + val);
            console.log(`sum of `, i, `rows:`, q)
        }
    }
}
sumOfrows(mat)