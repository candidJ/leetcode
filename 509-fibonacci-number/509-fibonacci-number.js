/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n < 1){
     return 0;
    }
    
    if(n ==1){
        return 1;
    }
    
    return fib(n-1) + fib(n-2)
};


// solve with dynamic programming
// time complexity and space complexity for recrusive way