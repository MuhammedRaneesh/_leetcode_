1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var buildArray = function(nums) {
6    let ans = []
7
8    for(let i = 0 ; i< nums.length ; i++){
9        ans[i] = nums[nums[i]]
10    }
11    return ans
12};