1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var maxArea = function(height) {
6    // let maxArea = 0
7    // for(let i = 0 ; i < height.length ; i++){
8
9    //     for(let j = i + 1 ; j < height.length ; j++){
10    //         let width = j - i 
11    //         let h = Math.min(height[i],height[j])
12    //         let area =  width * h
13    //         maxArea =  Math.max(maxArea , area)
14    //     }
15    // }
16    // return maxArea
17
18    let left = 0 ; 
19    let right = height.length - 1 
20    let maxArea = 0
21
22    while(left < right){
23
24        let w = right - left 
25        let h = Math.min(height[left] , height[right]) 
26        let area = w * h 
27        if(area  > maxArea){
28            maxArea = area
29        }
30
31        if(height[right] > height[left]){
32            left++
33        }else{
34            right--
35        }
36    }   
37    return maxArea
38};