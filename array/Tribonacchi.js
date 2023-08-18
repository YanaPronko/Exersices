function tribonacci(signature, n) {
  if (n == 0) return [];
  if (n <= 3) return [...signature.slice(0, n)];
  const resArr = [...signature];

  for (let i = 0; i < n-3; i++) {
    let sum = resArr.slice(-3).reduce((acc, item) => acc + item);
    resArr.push(sum);
  }
  return resArr;
}

console.log(tribonacci([1, 1, 1], 3));

// function tribonacci(signature, n) {
//   for (var i = 0; i < n - 3; i++) {
//     // iterate n times
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
//   }
//   console.log(signature);
//   return signature.slice(0, n); //return trib - length of n
// }
// console.log(tribonacci([1, 1, 1], 1));

// function tribonacci(signature, n) {
//   const result = signature.slice(0, n);
//   while (result.length < n) {
//     result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
//   }
//   return result;
// }