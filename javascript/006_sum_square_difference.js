// The sum of the squares of the first ten natural numbers
//is,12+22+...+102=385.The square of the sum of the first
// ten natural numbers is,(1+2+...+10)2=552=3025.Hence
// the difference between the sum of the squares of the
// first ten natural numbers and the square of the sum is
//3025−385=2640.Find the difference between the sum of
//the squares of the first one hundred natural numbers
//and the square of the sum.

const n = 10;
function sumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
  }

  // the formula for sumOfSquares is n(2n+1)(n+1)/6
  // found this reading solution
  //   let sum = (n * (2 * n + 1) * (n + 1)) / 6;
  return sum;
}

function squareOfSum(n) {
  let sum = (n * (n + 1)) / 2;
  return sum ** 2;
}

let sq = squareOfSum(n);
let su = sumOfSquares(n);
let diff = sq - su;
console.log(diff);
