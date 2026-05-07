1/**
2 * @param {number} num
3 * @return {number}
4 */
5var countDigits = function(num) {
6    let count = 0 ;
7    let digits =  String(num).split('');
8
9    for(let i =0 ; i < digits.length ; i++){
10        let number = Number(digits[i])
11        if(num % number === 0){
12            count++
13        }
14    }
15
16    return count
17};