function order(words) {
  const array = words.split(" ");
  const sortFN = (val1, val2) => {
    let dig1 = val1.match(/\d/);
    let dig2 = val2.match(/\d/);
    if (dig1 < dig2) {
      return -1;
    }
    if (dig1 > dig2) {
      return 1;
    }
    return 0;
  };
  return array.sort(sortFN).join(" ");
}

// Более короткий вариант
// function order(words){

//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
order("4of Fo1r pe6ople g3ood th5e the2");