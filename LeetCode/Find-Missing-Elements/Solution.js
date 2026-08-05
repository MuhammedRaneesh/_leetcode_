1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var findMissingElements = function(nums) {
6    let minimum = Math.min(...nums)
7    let maximum = Math.max(...nums)
8
9    let set = new Set(nums)
10    let result = []
11
12    for(let i = minimum ; i <= maximum ; i++ ){
13        if(!set.has(i)){
14            result.push(i)
15        }
16    }
17    return result
18};