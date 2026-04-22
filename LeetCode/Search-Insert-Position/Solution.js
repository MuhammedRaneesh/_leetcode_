1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var searchInsert = function(nums, target) {
7
8    for(let i = 0 ; i <= nums.length ; i++){
9        if(nums[i] === target){
10            return i 
11        }
12        if(target <= nums[i]){
13            return i
14        }
15       
16    }
17    return nums.length
18};