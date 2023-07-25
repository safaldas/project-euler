// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
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
  console.log(currentPrimes);
  return true;
}
function largest_prime_factor_of(x) {
  let largest = 1;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    const rem = x % i;
    if (rem === 0) {
      if (isPrime(i)) {
        largest = i;
      }
    }
  }
  return largest;
}
console.log(largest_prime_factor_of(600851475143));
