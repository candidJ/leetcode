/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    nums.forEach((num, index)=> {
    ans[index] = ans[index+ nums.length] = nums[index];
});

return ans;
};



/*
*/