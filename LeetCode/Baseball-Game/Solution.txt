1/**
2 * @param {string[]} operations
3 * @return {number}
4 */
5var calPoints = function(operations) {
6
7    const value = [];
8    for (let i = 0; i < operations.length; i++) {
9        if (operations[i] === 'C') {
10            value.pop();
11        } else if (operations[i] === 'D') {
12            value.push(value[value.length - 1] * 2);
13        } else if (operations[i] === '+') {
14            value.push(value[value.length - 1] + value[value.length - 2]);
15        } else {
16            value.push(Number(operations[i]));
17        }
18    }
19    let sum = value.reduce((a,b)=> a + b ,0)
20    return sum;
21    
22};