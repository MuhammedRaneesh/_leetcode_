1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var concatWithReverse = function(nums) {
6    let ans = []
7    let n = nums.length
8    for(let i = 0 ; i < n ; i++){
9        ans[i] = nums[i]
10        ans[i + n ] = nums[ n - i - 1]
11    }
12    return ans
13};