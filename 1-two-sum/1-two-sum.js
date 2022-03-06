/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let indexes=[];
    
    for(let i =0; i <= nums.length - 2; i++){
        for(let j = nums.length-1; j > i; j--){
            if(nums[i] + nums[j] == target){
                indexes.push(i,j);
            }
        }
    }
    
    return indexes;
    
};
