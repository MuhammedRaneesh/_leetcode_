1/**
2 * @param {number[]} nums
3 * @param {number} pivot
4 * @return {number[]}
5 */
6var pivotArray = function(nums, pivot) {
7    let left = [] ;
8    let right = [] ;
9    let equal = [] ;
10    
11    for(let i = 0 ; i < nums.length ; i++){
12        if(nums[i] < pivot){
13            left.push(nums[i])
14        }else if(nums[i] === pivot){
15            equal.push(nums[i])
16        }else if(nums[i] > pivot){
17            right.push(nums[i])
18        }
19    }
20
21    return [...left,...equal,...right]
22};