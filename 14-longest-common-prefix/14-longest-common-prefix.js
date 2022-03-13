/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let output = "";
    
    if(strs.length <2){
            return strs[0];
    }
    
    for(let index = 0; index < strs[0].length; index++){
        for(let word of strs){
            if(word[index] !==  strs[0][index]){
                console.log(word);
                return word.slice(0,index);
                            }
        }
    }
    console.log(output, "output");
    return strs[0];
};