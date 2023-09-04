// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string) {
  let alphaphet = [...'abcdefghijklmnopqrstuvwxyz'];
  let res = [];
  for (let i = 0; i < alphaphet.length; i++) {
    if (string.toLowerCase().includes(alphaphet[i])) {
      res.push(alphaphet[i]);
    }
  }
  if(res.length == alphaphet.length) {
    return true;
  }
  return false;
}

console.log(isPangram('This is not a pangram.'));

// return 'abcdefghijklmnopqrstuvwxyz'
//   .split('')
//   .every((x) => string.toLowerCase().includes(x));