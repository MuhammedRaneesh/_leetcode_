1/**
2 * @param {string[]} words
3 * @param {number[]} weights
4 * @return {string}
5 */
6var mapWordWeights = function(words, weights) {
7    let result = "";
8
9    for (let word of words) {
10        let sum = 0;
11
12        for (let char of word) {
13            sum += weights[char.charCodeAt(0) - 97];
14        }
15
16        let remainder = sum % 26;
17        result += String.fromCharCode(122 - remainder);
18    }
19
20    return result;
21};