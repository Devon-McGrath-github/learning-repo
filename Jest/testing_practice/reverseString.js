function reverseString(string) {
    return string.split('').reverse().reduce((character, revString ) => character + revString)
}

module.exports = reverseString