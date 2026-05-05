1/**
2 * @param {string[]} words
3 * @return {string}
4 */
5var firstPalindrome = function(words) {
6    for(let i = 0 ; i < words.length ; i++){
7        
8        let result = words[i].split("").reverse().join("") 
9        
10        if(words[i] === result){
11            return words[i]
12        }
13    }
14    return ""
15};