1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var backspaceCompare = function(s, t) {
7   
8   const calculation = (value)=>{
9        let result = [] 
10
11        for(let char of value){
12            if(char === "#"){
13                result.pop()
14            }else{
15                result.push(char)
16            }
17        }
18        return result.join("")
19    }
20   
21    return calculation(s) === calculation(t)
22};