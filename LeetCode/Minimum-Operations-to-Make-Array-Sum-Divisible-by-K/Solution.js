1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var minOperations = function(nums, k) {
7    let totalSum = nums.reduce((sum, num) => sum + num, 0);
8    
9    return totalSum % k;
10};