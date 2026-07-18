1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var getConcatenation = function(nums) {
6    let ans = [] 
7
8    for(let i = 0 ; i < nums.length ; i++){
9        ans.push(nums[i])
10    }
11    for(let i = 0 ; i < nums.length ; i++){
12        ans.push(nums[i])
13    }
14    return ans 
15};