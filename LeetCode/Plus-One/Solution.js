1/**
2 * @param {number[]} digits
3 * @return {number[]}
4 */
5var plusOne = function(digits) {
6    let n = digits.length;
7
8    for (let i = n - 1; i >= 0; i--) {
9        if (digits[i] < 9) {
10            digits[i]++;
11            return digits;
12        }
13
14        digits[i] = 0;
15    }
16
17    digits.unshift(1);
18    return digits;
19};