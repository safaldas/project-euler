//  A palindromic number reads the same both ways.
// The largest palindrome made from the product of
//  two 2-digit numbers is 9009 = 91 * 99.
// Find the largest palindrome made from the
// product of two 3-digit numbers.

let largest3DigitFirst = 999;
let largest3DigitSecond = 999;

function isPalindrome(num) {
  let reversed = num.toString().split("").reverse().join("");
  reversed = +reversed;
  return reversed === num;
}
let largestProduct = 999 * 999;
let smallestProduct = 10000;

for (
  let currentValue = largestProduct;
  currentValue > smallestProduct;
  currentValue--
) {
  if (isPalindrome(currentValue)) {
    // find its 3 digit factors

    for (let first = 999; first > 100; first--) {
      if (currentValue % first === 0) {
        let second = currentValue / first;
        if (second.toString().length === 3) {
          console.log({ currentValue });
          console.log({ first, second });
          return;
        }
      }
    }
  }
}
