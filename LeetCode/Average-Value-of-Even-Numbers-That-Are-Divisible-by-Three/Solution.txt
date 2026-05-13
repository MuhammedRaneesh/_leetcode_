1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var averageValue = function(nums) {
6    let sum = 0
7    let count = 0
8    for(let i = 0 ; i < nums.length ; i++){
9        if( nums[i] % 2 === 0 && nums[i] % 3 === 0 ){
10            sum += nums[i]
11            count++
12        }
13    }
14    if(count === 0 ){{
15        return 0
16    }}
17    return Math.floor(sum / count)
18};