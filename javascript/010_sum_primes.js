function isPrime(x) {
  if (x <= 1) return false;
  if (x <= 3) return true;
  if (x % 2 === 0 || x % 3 === 0) return false;

  const sqroot = x ** 0.5;
  for (let i = 5; i <= sqroot; i += 6) {
    if (x % i === 0 || x % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
let sum = 0;
for (let i = 2; i < 2000000; i++) {
  if (isPrime(i)) {
    sum += i;
  }
}
console.log(sum);
