function mergeAlternately(word1, word2) {
    var length1 = word1.length;
    var length2 = word2.length;
    var result = '';
    for (var i = 0; i < Math.max(length1, length2); i++) {
        result += word1.charAt(i);
        result += word2.charAt(i);
    }
    return result;
}
;
console.log(mergeAlternately('welcomehome this', 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'));
// used tsc index.ts to compile index.js and run (very quick basic way to get it running quickly, not ideal )
