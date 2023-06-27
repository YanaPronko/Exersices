function duplicateCount(text) {
  const textArr = [...text.toLowerCase()];
  const filteredArr = new Set(textArr.filter((val, ind) => textArr.indexOf(val) !== textArr.lastIndexOf(val)));
  return filteredArr.size;
}

// Другой вариант
// function duplicateCount(text) {
//   return text
//     .toLowerCase()
//     .split("")
//     .filter(function (val, i, arr) {
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }

// function duplicateCount(text) {
//   var lower = text.toLowerCase();
//   var count = 0;
//   var used = [];

//   lower.split("").forEach(function (letter) {
//     if (!used.includes(letter) && lower.split(letter).length - 1 > 1) {
//       count++;
//       used.push(letter);
//     }
//   });

//   return count;
// }
duplicateCount("Indivisibilities");