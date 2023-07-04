function reverseString(string) {
    return string.split('').reduce((reversed, character ) => character + reversed, '')
}

module.exports = reverseString