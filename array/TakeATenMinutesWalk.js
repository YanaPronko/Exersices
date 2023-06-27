/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!). */

// МОЙ вариант №2
function isValidWalk(walk) {
  let sum = 0;

  const numbers = walk.map((item) => {
    switch (item) {
      case "n":
        return (item = -1);

      case "s":
        return (item = 1);
      case "e":
        return (item = -2);
      case "w":
        return (item = 2);
    }
  });
  numbers.forEach((num) => (sum += num));
  if (walk.length === 10 && sum === 0) {
    return true;
  } else return false;
}

// ТЕСТЫ не все проходит вариант
// function isValidWalk(walk) {
//   if (walk.length !== 10) return false;
//   const midArray = [];

//   const numbers =  walk.map((item) => {
//     switch (item) {
//       case "n":
//         return item = -1;

//       case 's':
//         return item = 1;
//       case 'e':
//         return item = -2;
//       case 'w':
//         return item = 2;
//     }
//   })

//   numbers.forEach((item) => {
//     if (midArray.length === 0) {
//       midArray.push(item);
//     } else if (item + midArray[midArray.length - 1] === 0) {
//       midArray.pop();
//     } else {
//       midArray.push(item);
//     }
//   });
//   if (midArray.length === 0 && walk.length === 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Варианты других:
// function isValidWalk(walk) {
//   var dx = 0;
//   var dy = 0;
//   var dt = walk.length;

//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case "n":
//         dy--;
//         break;
//       case "s":
//         dy++;
//         break;
//       case "w":
//         dx--;
//         break;
//       case "e":
//         dx++;
//         break;
//     }
//   }

//   return dt === 10 && dx === 0 && dy === 0;
// }

// function isValidWalk(walk) {
//   const north = walk.filter((item) => {
//     return item === "n";
//   }).length;
//   const south = walk.filter((item) => {
//     return item === "s";
//   }).length;
//   const east = walk.filter((item) => {
//     return item === "e";
//   }).length;
//   const west = walk.filter((item) => {
//     return item === "w";
//   }).length;

//   return walk.length === 10 && north === south && east === west;
// }
