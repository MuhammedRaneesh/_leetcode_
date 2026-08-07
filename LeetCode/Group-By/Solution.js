1/**
2 * @param {Function} fn
3 * @return {Object}
4 */
5Array.prototype.groupBy = function(fn) {
6    let out = {}
7
8    for(let i = 0 ; i < this.length ; i++){
9        let current = this[i]
10        let categoryKey = fn(current)
11
12        if(!out[categoryKey ]){
13            out[categoryKey ] = []
14        
15        }
16        
17        out[categoryKey].push(current)
18    }
19    return out
20};
21
22/**
23 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
24 */