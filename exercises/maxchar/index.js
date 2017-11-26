// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var hashMap = {};
    str.split('').forEach(function(character) {
        if (hashMap[character]) hashMap[character]++;
        else hashMap[character] = 1;
    }) 
    var highestNumber = 0;
    var maxCharacter = '';
    Object.keys(hashMap).forEach(function(char) {
      if (hashMap[char] > highestNumber) {
        maxCharacter = char;
        highestNumber = hashMap[char]
      }
    })
    return maxCharacter
}

module.exports = maxChar;
