function MaxValue(shares) {
  // Your code here:
  let max = shares[1] - shares[0];
  for (let i = 0; i < shares.length - 1; i++) {
    for (let j = i + 1; j < shares.length; j++) {
      let ganancia = shares[j] - shares[i];
      max = ganancia > max ? ganancia : max;
    }
  }
  return max;
}

console.log(MaxValue([4, 3, 2, 5, 11])); //(9)
console.log(MaxValue([23, 7, 3, 4, 8, 6])); //(5)
module.exports = MaxValue;
