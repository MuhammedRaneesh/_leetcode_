1/**
2 * @param {number[][]} matrix
3 * @return {number[]}
4 */
5var findDegrees = function(matrix) {
6    let ans = []
7    for(let i = 0 ; i < matrix.length ; i++){
8        let count = 0
9
10        for(let j = 0 ; j < matrix.length ; j++){
11            if(matrix[i][j] === 1){
12                count++
13            }
14            
15        }
16        ans.push(count)
17    }
18    return ans
19};