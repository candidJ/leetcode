/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
if(n >0 ){
  const log2 = Math.log2(n);
  const regExp = new RegExp(/\./);
    if(regExp.test(log2)){
        return false;
    }else {
        return true;
    }
}else {
    return false;
}
};




/*

examples:
Input: n = 1;
Output: true

edge case of 0

*/