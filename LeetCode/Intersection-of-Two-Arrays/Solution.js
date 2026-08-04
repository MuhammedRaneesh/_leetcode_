1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[]}
5 */
6var intersection = function(nums1, nums2) {
7    // for(let i = 0 ; i < nums1.length ; i++){
8
9    //     for(let j = 0 ; j < nums2.length ; j++){
10    //         if(nums1[i] === nums2[j]){
11    //             result.push(nums[i])
12    //         }
13    //     }
14    // }
15    // console.log(result)
16
17    let result = []
18    let number1 = new Set(nums1)
19
20    for(let i = 0; i < nums2.length ; i++){
21        if(number1.has(nums2[i])){
22            result.push(nums2[i])
23            number1.delete(nums2[i])
24        }
25    }
26    return result
27};