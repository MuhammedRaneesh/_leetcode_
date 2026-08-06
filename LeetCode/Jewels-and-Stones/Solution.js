1/**
2 * @param {string} jewels
3 * @param {string} stones
4 * @return {number}
5 */
6var numJewelsInStones = function(jewels, stones) {
7    let count  = 0
8    let setValue = new Set(jewels)
9
10    for(let i = 0 ; i < stones.length ; i++){
11        if(setValue.has(stones[i])){
12            count++
13        }
14    }
15
16    return count
17};