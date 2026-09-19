1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var minimumOperations = function(nums) {
6    let operations = 0;
7
8    for (let num of nums) {
9        if (num % 3 !== 0) {
10            operations++;
11        }
12    }
13
14    return operations;
15};