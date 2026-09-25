1/**
2 * @param {number[]} numbers
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(numbers, target) {
7    
8
9    // for(let i = 0 ; i < numbers.length ; i++){
10
11    //     for(let j = 0 ; j < numbers.length ; j++){
12
13    //         if(numbers[i] + numbers[j] === target){
14    //             return [i+1 , j+1]
15    //         }
16    //     }
17    // }
18
19    let left = 0 ;
20    let right = numbers.length -1
21
22    while(left < right){
23        let sum = numbers[left] + numbers[right]
24
25        if(sum === target){
26           return [left + 1 , right + 1 ]
27        }else if(sum > target){
28            right--
29        }else if(sum < target){
30            left++
31        }
32    }
33};