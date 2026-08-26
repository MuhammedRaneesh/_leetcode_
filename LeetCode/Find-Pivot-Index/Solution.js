1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var pivotIndex = function(nums) {
6    let totalSum = nums.reduce((sum, num) => sum + num, 0);
7    let leftSum = 0;
8
9    for (let i = 0; i < nums.length; i++) {
10        let rightSum = totalSum - leftSum - nums[i];
11
12        if (leftSum === rightSum) {
13            return i;
14        }
15
16        leftSum += nums[i];
17    }
18
19    return -1
20};