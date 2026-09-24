1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNumber = function(nums) {
6    
7    let map = new Map()
8
9    for(let num of nums){
10        if(map.has(num)){
11            map.set(num , map.get(num) + 1)
12        }else {
13            map.set(num , 1)
14        }
15    }
16    
17    for(let [num , count] of map){
18        if(count === 1){
19            return num
20        }
21    }
22 
23};