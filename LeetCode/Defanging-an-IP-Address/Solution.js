1/**
2 * @param {string} address
3 * @return {string}
4 */
5var defangIPaddr = function(address) {
6    // let result = ""
7    // for(let i = 0 ; i < address.length ; i++){
8    //     if(address[i] === "."){
9    //         result+= "[.]"
10    //     }else{
11    //         result+= address[i]
12    //     }
13    // }
14    // return result
15
16    address = address.replaceAll("." , "[.]")
17    return address
18};