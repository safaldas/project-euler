{
  /* If we list all the natural numbers below 10
that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. */
}

function sumOfMultiplesOf3or5Below(bound) {
  // create a set to store the multiples so that
  // there is no duplicate values
  const mulitples = new Set();

  // find multiples of 3 and 5 below the bound
  for (let i = 0; i < bound / 2; i++) {
    if (i * 3 < bound) {
      mulitples.add(i * 3);
    }
    if (i * 5 < bound) {
      mulitples.add(i * 5);
    }
  }

  let sum = 0;
  for (let multiple of mulitples) {
    sum += multiple;
  }
  console.log(sum);
}

sumOfMultiplesOf3or5Below(1000);
