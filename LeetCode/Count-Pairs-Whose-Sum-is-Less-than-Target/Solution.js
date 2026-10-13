1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var countPairs = function(nums, target) {
7    let count = 0 
8
9    for(let i = 0 ; i < nums.length ; i++){
10
11        for(let j = i + 1 ;  j < nums.length ; j++){
12            if( nums[i] + nums[j] < target){
13                count++
14            }
15        }
16    }
17    return count 
18};