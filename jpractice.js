// Q - 1) Write a program to print the sum of right diagonal of a matrix
// Q - 2) Write a program to print sum of border elements of a square Matrix
// Q - 3) Write a function to return sum of rows of a matrix as an array.


mat = [
    [1, 5, 3, 6], //1+5+3+6+2+2+3+5+8+5+5+6= 51
    [6, 5, 7, 2],
    [5, 5, 4, 2],
    [5, 8, 5, 3]
]

let n = mat.length;
let m = mat[0].length;

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         if ((i && j) == 0 || (i && j) == mat.length - 1) {
//             c = mat[i][j].reduce((acc, val) => acc + val)
//             console.log(c);

//         }
//     }
// }

// if (n == m && n > 2) {
//     var a = mat[0].reduce((acc, val) => acc + val)
//     var b = mat[n].reduce((acc, val) => acc + val);
//     console.log(a + b)
// }

// arr = []
// for (let i = 0; i < n; i++) {
//     var a = mat[i].reduce((acc, val) => acc + val);
//     arr.push(a)
// }
// console.log(arr);

//print left principal diagonal
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         if (i == j)
//             console.log(mat[i][j]);
//     }
// }


// for (let i = 0; i < n; i++) {
//     let str = ""
//     for (let j = 0; j < m; j++) {
//         str += mat[i][j];
//         str += " ";
//     }
//     console.log(str);
// }

// making sum of column
count = 0;
for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {

        if (i == 0 || i == m - 1) {
            c = mat[j][i]; //if we wan to print row of index 2 swap j and 1
            count += c;
        }
    }
}
// console.log(count)

for (let i = 0; i < n; i++) {
    if (i == 0 || i == n - 1) {
        k = mat[i].reduce((acc, val) => acc + val);
    }
}
console.log(count + k)



// let sum = 0;
// for (let j = 0; j < m; j++) {
//     sum += (mat[j][n - j - 1]);
// }
// console.log(sum)

// for (let j = 0; j < n; j++) {
//     console.log(mat[j][j]); //if we wan to print row of index 2 swap j and 1
// }