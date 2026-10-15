1/**
2 * @param {string} s
3 * @return {number}
4 */
5var scoreOfString = function(s) {
6    let result = 0 
7
8    for(let i = 0 ; i < s.length - 1 ; i++){
9        let first = s.charCodeAt(i);
10        let second = s.charCodeAt(i + 1)
11        result += Math.abs(first - second)
12    }
13
14    return result
15};