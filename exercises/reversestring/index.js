// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reverse().join('')
    var reversedStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr.concat(str[i])
    }
    return reversedStr
}

module.exports = reverse;
