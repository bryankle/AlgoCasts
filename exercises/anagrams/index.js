// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    var hashMap = {};
    var stringC = stringA.concat(stringB);
    for (let character of stringC) {
      if (hashMap[character]) delete hashMap[character];
      else hashMap[character] = true;
    }
    return Object.keys(hashMap).length === 0;
  }
module.exports = anagrams;
