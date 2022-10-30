// // input = "hackherrank"
// // count = 0;
// // for (i = 0; i < input.length; i++) {
// //     if ((input.indexOf(input[i])) === (input.lastIndexOf(input[i]))) {
// //         count++;
// //     }

// // }
// // console.log(count)
// // let count = 0;
// // for (i = 0; i < input.length; i++) {
// //     if (input.indexOf(input[i]) != input.lastIndexOf(input[i])) {
// //         count++;
// //         console.log(count)
// //     } else {
// //         return -1;
// //     }
// // }
// // console.log(count)
// function processData(input) {
//     //Enter your code here
//     let count = 0;
//     while (input != 1) {
//         if (input % 2 != 0) {
//             input = 3 * input + 1;
//         } else {
//             input = input / 2;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(processData(3))
input = [4, 5, 6]


let num = 0;
count = 0;
for (let i = 0; i < input.length; i++) {
    for (k = input[i]; k >= 0; k--) {
        if (input[i] % k == 0) {
            count++;
        }
    }
    if (count == 3) {
        console.log("YES")
    } else {
        console.log("No")
    }
}