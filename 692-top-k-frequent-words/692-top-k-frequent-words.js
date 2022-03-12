/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let hash = {};
for(let word of words){
    hash[word] = hash[word] ? hash[word] + 1 : 1;
}
    
    console.log(hash);
    
    let hashEntries = Object.entries(hash);
    hashEntries.sort((a,b)=> {
        // if(a[1] == b[1]){
        //     // if frequency is same
        //     //  order by chararcter
        //     // console.log(a[0], b[0]);
        //   return  a[0] > b[0] ?  1 :  -1;
        // }else {
        //      // order by frequency
        //     return b[1] - a[1];
        // }
        
        
        return a[1] != b[1] ? b[1]- a[1] :  a[0] > b[0] ?  1 :  -1;

    });
    
   
    
    
    
    
    
    console.log(hashEntries);
return    hashEntries.slice(0, k).map(([word]) => word);
};


/*
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]

let hash = {};
for(let word of words){
    hash[word] = hash[word] ? hash[word] + 1 : 1;
}

// sort the hash
Object.enteries(hash)

*/