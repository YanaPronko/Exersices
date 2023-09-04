// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
function sortArray(array) {
  // const oddsBySort = array.filter(item => item % 2 !== 0).sort((a ,b)=> a-b);
  // const indexesOfEvens = [];
  // array.forEach((item, i) => {
  //   if (item % 2 === 0) {
  //     evens.push(item);
  //     indexesOfEvens.push(i);
  //   }
  // });

  // indexesOfEvens.forEach((item, i) => {
  //   oddsBySort.splice(item, 0, evens[i])
  // });
  // return oddsBySort;

  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  console.log(odd);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}


console.log(sortArray([5, 8, 6, 3, 4]));