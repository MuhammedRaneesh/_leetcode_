1/**
2 * @param {number[]} nums
3 * @return {void} Do not return anything, modify nums in-place instead.
4 */
5var moveZeroes = function(nums) {
6    
7    let left = 0 
8    let right = 0
9
10    while(right < nums.length){
11        if(nums[right] !== 0){
12            let temp = nums[left]
13            nums[left] = nums[right]
14            nums[right] = temp
15            left++
16        }
17        right++
18    }
19    return nums
20};