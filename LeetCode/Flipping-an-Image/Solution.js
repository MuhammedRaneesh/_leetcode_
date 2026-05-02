1/**
2 * @param {number[][]} image
3 * @return {number[][]}
4 */
5var flipAndInvertImage = function(image) {
6    for(let i = 0 ; i < image.length ; i++){
7        let value = image[i].reverse()
8        
9        for(let j = 0 ; j < value.length ; j++){
10            if(value[j] === 0){
11                value[j] = 1
12            }else{
13                value[j] = 0
14            }
15        }
16    }
17    return image
18};