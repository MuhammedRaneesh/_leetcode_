1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNumber = function(nums) {
6    let value = {}
7
8    for(let i = 0; i < nums.length ; i++){
9        if(value[nums[i]]){
10           value[nums[i]] = value[nums[i]] + 1 
11        }else {
12            value[nums[i]] = 1 
13        }
14    }
15
16    for(let key in value){
17        if(value[key] === 1){
18            return Number(key)
19        }
20    }
21};