/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    const words = s.split(" ").filter(word=> word)
    return words[words.length-1].length;
};

/*

PEDAC
Understand the Problem
    Input and Output
       Input: s = "Hello World"
       Output: 5 
    Rules and requirements
        non-space characters only
    Edge Cases
        Input: s = "   fly me   to   the moon  "
        Output: 4
    Ask clarifying questions:
        ignore white spaces
Examples and Test cases:
    Given Test cases
    Own test cases
    Input: s = "      ";
    Output: 0
    
Data Structure
    What type of data are you primarily dealing with?
    Strings
Algorithm
    Steps
    Split in string based on empty space
    filter out the non-empty words
    get the last word from the array/stack
    get the length of last word
    return length;
    
Code
    
    
Debug
    
*/