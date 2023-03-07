function mdArraySum(arr) {
  let suma=0;
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])) suma +=mdArraySum(arr[i])
    else  suma+=arr[i]
  }
  return suma
}
console.log(mdArraySum([1, 2, 3, 4])); //(10)
console.log(mdArraySum([[2, 4], [1], [4, 2, 1]])); //(14)
console.log(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]])); //(26)

module.exports = mdArraySum;
