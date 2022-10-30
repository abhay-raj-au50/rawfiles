// What will be the Time Complexity of these code snippet?
// Q - 1 )Below are nested “K” for loops
// n= Number(prompt(“Enter the limit”))
// for(let i=0;i<n;i++){
//  for(let j=0;j<n;i++) {
// for(let m=0;m<n;i++) {
// //… … … K loops in total …
// for(let z=0;z<n;i++) {
// console.log(“Hello World”);
// }
// }
//  }
// }




//Time Complexity for for above question
O(n ** 3)



// Q-2)
// N= Number(prompt(“Enter the limit”))
// M= Number(prompt(“Enter the limit”))
// a = b = 0
// for(let i=0;i<N;i++){    O(n)
// a = a + 1
// }
// for(let j=0;j<M;j++)    O(m)
// b = b + 1



//Time Complexity for above question 
O(n + m)