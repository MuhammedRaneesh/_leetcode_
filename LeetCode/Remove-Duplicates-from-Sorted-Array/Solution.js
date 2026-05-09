1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function(nums) {
6    let k = 1 ;
7    for(let i=1 ; i<nums.length ; i++){
8        if(nums[i] !== nums[k-1]){
9            nums[k] = nums[i]
10            k++
11        }    
12    }
13    return k
14};