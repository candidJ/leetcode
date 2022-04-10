/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let lower = 0;
    let higher = s.length-1;
    
    while(higher> lower){
        let temp = s[lower];
        s[lower] = s[higher];
        s[higher] = temp;
        higher --;
        lower ++;
    }
    
    return s;
    
};


// var reverseString = function(s, index =s.length -1) {
//     if(index == 0){
//      return s;   
//     }
    
//     return [s.pop(), ...reverseString(s, index-1)];
// };

// if(s.length == 0){
//      return reverse;   
//     }
    
//     reverse.push(s.pop());
//     return reverseString(s, reverse);

// above solution is correct
// new approach - 2 pointers


/*

Problem - reverse a string

Edge cases: 
    Input : []
    Output : []
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

Technique: Recursion

DS: Array

Psuedo Code:


Base Condition:
If one element in array, return the array; no need to reverse/sort

Hypothesis:

Induction:


 Using Javascript:
 Grab the first character
 Insert at the first index using unshift
 Insert subsequent before the last insert
*/