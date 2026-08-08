1/**
2 * @param {string[][]} items
3 * @param {string} ruleKey
4 * @param {string} ruleValue
5 * @return {number}
6 */
7var countMatches = function(items, ruleKey, ruleValue) {
8    let count = 0 
9
10    let index;
11    if(ruleKey === "type"){
12        index = 0
13    }else if (ruleKey === "color"){
14        index = 1
15    }else{
16        index = 2
17    }
18    for(let i = 0 ; i < items.length ; i++){
19        if(items[i][index] === ruleValue){
20            count++
21        }
22    }
23    return count
24};