1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isValid = function(s) {
6    let stack  = [] 
7
8    for(let ch of s){
9        if(ch === "(" || ch === "[" || ch === "{"){
10            stack.push(ch)
11        }else {
12            if(stack.length === 0){
13                return false
14            }
15            
16            let top = stack.pop()
17            if(
18                (ch === ")" && top !== "(") ||
19                (ch === "]" && top !== "[") ||
20                (ch === "}" && top !== "{")
21            ){
22                return false;
23            }
24        }
25    }
26
27    return stack.length === 0
28};