1/**
2 * @param {string} key
3 * @param {string} message
4 * @return {string}
5 */
6var decodeMessage = function(key, message) {
7     let map = {};
8    let alphabet = "abcdefghijklmnopqrstuvwxyz";
9    let index = 0;
10    
11    for (let i = 0; i < key.length; i++) {
12        let value = key[i];
13
14        if (value !== " " && map[value] === undefined) {
15            map[value] = alphabet[index];
16            index++;
17        }
18    }
19    let result = "";
20
21    for (let i = 0; i < message.length; i++) {
22        let char = message[i];
23
24        if (char === " ") {
25            result += " ";
26        } else {
27            result += map[char];
28        }
29    }
30
31    return result;
32};
33