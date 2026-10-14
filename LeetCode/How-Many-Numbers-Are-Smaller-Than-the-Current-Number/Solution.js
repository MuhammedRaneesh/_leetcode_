1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var smallerNumbersThanCurrent = function(nums) {
6    let result = [] ;
7
8    for(let i = 0 ; i < nums.length ; i++){
9        let count = 0 
10        for(let j = 0   ; j < nums.length ; j++){
11            if(nums[i] > nums[j] ){
12                count++
13            }
14        }
15        result.push(count)
16    }
17
18    return result
19};