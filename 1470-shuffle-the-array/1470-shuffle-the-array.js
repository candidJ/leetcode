/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    if(n == 0){
        return nums;
    }
    let lower = nums.slice(0, n);
    let upper = nums.slice(n, nums.length);
    console.log(lower, upper, upper[upper.length + 1]);
    let result = [];
    
    let higher = lower.length > upper.length ? lower: upper;
    
    for(let i = 0 ; i < higher.length; i++){
        
        if(!lower[i]){
            result.push(...higher.slice(i, higher.length));
        }
         if(!higher[i]){
            result.push(...lower.slice(i, higher.length));
        }
        result.push(lower[i], higher[i]);
    }
    
    return result;
};



/*

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]

Edge cases: 
Input: nums = [1,3,4,5], n = 0;
Output : [1,3,4,5]

Input : nums = [1,3,4,5,6], n = 2
Output: [1,4,3,5,6]


Algo:
1. slice the array for n. i.e nums.slice(0,n), nums.slice(n, nums.length);
2. get the greater length loop
3. for each highest number length loop
4. loop over
5. if lower[index] = undefined. then result.push(...higher.slice(index, higher.length))
6. return result;

*/