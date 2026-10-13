1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var transformArray = function(nums) {
6    let result = []
7    let zeros = 0
8
9    for(let i = 0 ; i < nums.length ; i++){
10        if(nums[i] % 2 === 0){
11            zeros++
12        }
13    }
14
15    for(let i = 0 ; i < nums.length ; i++){
16        if(i <  zeros){
17            result.push(0)
18        }else{
19            result.push(1)
20        }
21    }
22
23    return result
24};