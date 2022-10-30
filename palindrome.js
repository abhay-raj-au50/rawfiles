// week 10 day 04 coding challenge:
let palindrome = 0;
let num = 12321;
let lastDigit;

function solve(num) {

    while (num != 0 && num == palindrome) {
        lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    console.log("Palindrome")
}
solve(num);