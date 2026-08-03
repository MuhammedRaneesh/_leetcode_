1/**
2 * @param {number[]} order
3 * @param {number[]} friends
4 * @return {number[]}
5 */
6var recoverOrder = function(order, friends) {
7    let final = []
8    for(let i = 0 ; i < order.length ; i++){
9
10        for(let j = 0 ; j < friends.length ; j++){
11            if(order[i] === friends[j]){
12                final.push(order[i])
13                break;
14            }
15        }
16    }
17    return final
18};