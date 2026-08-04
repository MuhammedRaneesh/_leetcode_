1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[]}
5 */
6var intersection = function(nums1, nums2) {
7    let number1 = new Set(nums1)
8    let result =  new Set()
9
10    for(let i = 0; i < nums2.length ; i++){
11        if(number1.has(nums2[i])){
12            result.add(nums2[i])
13        }
14    }
15    return Array.from(result)
16};