1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var numIdenticalPairs = function(nums) {
6    let count = 0 ; 
7
8    for(let i = 0 ; i < nums.length ; i++){
9
10        for(let j = i + 1 ; j < nums.length ; j++){
11            if(nums[i] == nums[j]){
12                count++
13            }
14        }
15    }
16    return count 
17};