1/**
2 * @param {string} s
3 * @return {number}
4 */
5var romanToInt = function(s) {
6    const values = {
7        I: 1,
8        V: 5,
9        X: 10,
10        L: 50,
11        C: 100,
12        D: 500,
13        M: 1000
14    };
15
16    let result = 0;
17
18    for (let i = 0; i < s.length; i++) {
19        if (i + 1 < s.length && values[s[i]] < values[s[i + 1]]) {
20            result -= values[s[i]];
21        } else {
22            result += values[s[i]];
23        }
24    }
25
26    return result;
27};