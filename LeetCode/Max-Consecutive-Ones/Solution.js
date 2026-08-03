1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var findMaxConsecutiveOnes = function(nums) {
6    let maxStreak = 0 ;
7    let count = 0
8    for(let i = 0 ; i < nums.length ; i++){
9        if(nums[i] === 1){
10            count++ 
11            if(count > maxStreak){
12                maxStreak = count
13            }
14        }else{
15            count = 0
16        }
17    }
18    return maxStreak
19};