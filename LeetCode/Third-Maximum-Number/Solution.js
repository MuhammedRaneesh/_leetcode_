1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var thirdMax = function(nums) {
6    let first = -Infinity;
7    let second = -Infinity;
8    let third = -Infinity;
9    
10    for (let i = 0; i < nums.length; i++) {
11        let num = nums[i];
12        if (num === first || num === second || num === third) {
13            continue;
14        }
15        if (num > first) {
16            third = second;
17            second = first;
18            first = num;
19        } else if (num > second) {
20            third = second;
21            second = num;
22        } else if (num > third) {
23            third = num;
24        }
25    }
26    return third === -Infinity ? first : third;
27};