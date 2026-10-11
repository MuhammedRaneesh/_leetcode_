1/**
2 * @param {string[]} operations
3 * @return {number}
4 */
5var finalValueAfterOperations = function(operations) {
6    let output = 0
7    for(let i = 0 ; i <= operations.length ; i++){
8
9        if(operations[i] === "--X" || operations[i] === "X--"){
10            output--
11        }else if(operations[i] === "++X" || operations[i] === "X++"){
12            output++
13        }
14    }
15    return output
16};