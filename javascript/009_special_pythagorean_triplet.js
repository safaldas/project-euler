// A Pythagorean triplet is a set of three natural numbers, a<b<c,
// for which,a^2+b^2=c^2.For example, 3^2+4^2=9+16=25=5^2.There exists
// exactly one Pythagorean triplet for which a+b+c=1000.
// Find the product abc.

let N = 1000;
console.time();
for (let a = 1; a < N; a++) {
  for (let b = 1; b < N - a; b++) {
    for (let c = 1; c < N - b; c++) {
      if (a * a + b * b === c * c) {
        if (a + b + c === N) {
          console.log(a, b, c, a * b * c);
          return;
        }
      }
    }
  }
}
console.timeEnd();
