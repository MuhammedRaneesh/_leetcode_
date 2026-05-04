1/**
2 * @param {string} sentence
3 * @return {boolean}
4 */
5var checkIfPangram = function(sentence) {
6    let value = ""
7
8    for(let i = 0 ; i < sentence.length ; i++){
9        if(!value.includes(sentence[i])){
10            value += sentence[i]
11        }
12    }
13
14    return value.length === 26 
15};