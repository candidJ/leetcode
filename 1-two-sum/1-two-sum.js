/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
let targetHashMap = {};
for (let i = 0; i <= nums.length-1; i++){
    targetHashMap[target- nums[i]] = i;
    
    if(nums[i + 1] in targetHashMap){
        console.log(targetHashMap, nums[i +1], i);
        return [i+1 , targetHashMap[nums[i+1]]];
    }
}
    
};


/*

Brute force

//     let indexes=[];
    
//     for(let i =0; i <= nums.length - 2; i++){
//         for(let j = nums.length-1; j > i; j--){
//             if(nums[i] + nums[j] == target){
//                 indexes.push(i,j);
//             }
//         }
//     }
    
//     return indexes;
*/