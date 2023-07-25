// 2520 is the smallest number that can be divided
// by each of the numbers from 1 to 10 without any
// remainder.What is the smallest positive number
// that is evenly divisible(divisible with no remainder)
// by all of the numbers from 1 to 20?

const n = 20;

// find all prime numbers from 1 to 20 and store in array
const currentPrimes = [];
function isPrime(x) {
  if (currentPrimes.indexOf(x) > -1) {
    return true;
  }
  for (let i = 2; i <= x / 2; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  currentPrimes.push(x);
  return true;
}

for (let i = 2; i < n; i++) {
  isPrime(i);
}
console.log(currentPrimes);

// loop and find the largest pow
let smallestMultiple = 1;

currentPrimes.forEach((primeNumber) => {
  let largestPowLessThanN = primeNumber,
    k = 1;
  while (true) {
    largestPowLessThanN = primeNumber ** k;
    if (largestPowLessThanN < n) {
    } else {
      smallestMultiple *= primeNumber ** (k - 1);
      break;
    }
    k++;
  }
});

console.log(smallestMultiple);
