1/**
2 * @param {number[]} hours
3 * @param {number} target
4 * @return {number}
5 */
6var numberOfEmployeesWhoMetTarget = function(hours, target) {
7    let count = 0
8    for(let i = 0 ; i < hours.length ; i++){
9
10        if(hours[i] >= target){
11            count++
12        }
13    }
14    return count
15};