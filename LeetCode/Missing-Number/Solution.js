1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var missingNumber = function(nums) {
6    let numSet = new Set(nums);
7    
8    let n = nums.length;
9    for (let i = 0; i <= n; i++) {
10        if (!numSet.has(i)) {
11            return i;
12        }
13    }
14    
15};