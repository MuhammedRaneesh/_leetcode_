1/**
2 * @param {string[]} words
3 * @param {character} x
4 * @return {number[]}
5 */
6var findWordsContaining = function(words, x) {
7    let result = []
8    for(let i = 0 ; i < words.length ; i++){
9        if(words[i].includes(x)){
10            result.push(i)
11        }
12    }
13
14    return result
15};