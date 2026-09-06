1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7    if(s.length !== t.length){
8        return false
9    }
10
11    const count = new Array(26).fill(0);
12
13    for (let i = 0; i < s.length; i++) {
14        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
15        count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
16    }
17
18    for (let i = 0; i < 26; i++) {
19        if (count[i] !== 0) {
20            return false;
21        }
22    }
23
24    return true;
25};