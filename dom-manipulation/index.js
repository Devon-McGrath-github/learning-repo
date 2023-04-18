function mergeAlternately(word1, word2) {
  let length1 = word1.length;
  let length2 = word2.length;

  let result = '';

  for (let i = 0; i < Math.max(length1, length2) ; i++) {
    result += word1.charAt(i);
    result += word2.charAt(i);
  }
  return result;
};

console.log(mergeAlternately('welcomehome this','ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'))