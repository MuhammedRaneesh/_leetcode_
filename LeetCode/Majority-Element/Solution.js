1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var majorityElement = function(nums) {
6    let count = {}
7    let half = nums.length / 2
8
9    for (let num of nums) {
10        count[num] = (count[num] || 0) + 1;
11        if (count[num] > half) {
12            return num;
13        }
14    }
15};