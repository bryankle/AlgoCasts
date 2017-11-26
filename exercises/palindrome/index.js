// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // return str === str.split('').reverse().join('')
    var isPalindrome = true;
    var start = 0;
    var end = str.length - 1;
    for (var i = 0; i < str.length / 2; i++) {
        if (str[start] === str[end]) {
            start++;
            end--;
        }
        else {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}

module.exports = palindrome;
