1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    let word = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
7    console.log(word)
8    let left = 0 ;
9    let right = word.length - 1
10    
11    while(left < right){
12        if(word[left]!== word[right]){
13            return false
14        }
15       
16        left++
17        right--
18    }
19    return true 
20};