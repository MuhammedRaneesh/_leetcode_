1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    let word = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
7    let left = 0 ;
8    let right = word.length - 1
9
10    while(left < right){
11        if(word[left]!== word[right]){
12            return false
13        }
14       
15        left++
16        right--
17    }
18    return true 
19};