1/**
2 * @param {string} s
3 * @return {string}
4 */
5var sortSentence = function(s) {
6    let words = s.split(" ");
7    let result = [];
8
9    for (let i = 0; i < words.length; i++) {
10        let word = words[i];
11        let position = word[word.length - 1];
12        let text = word.slice(0, word.length - 1);
13
14        result[position - 1] = text;
15    }
16
17    return result.join(" ");
18};