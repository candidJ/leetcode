/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let output = 0;
     nums.forEach((value, index)=> {
       // check if value === target
            // return index
        if(value === target){
            console.log(index)
            output = index;
            return output;
            
        }else {
           if(value < target && index !== nums.length -1 && target < nums[index+ 1]){
               output = index + 1;
               return output;
           } 
            
        if(value < target && index === nums.length -1){
               console.log(output);
               output = nums.length;
            return output;
           }
        }
    });
            return output;
    
};


/*
Type: Array
Input: nums = [1,3,5,6], target = 5
Output: 2

[1,3,5,6]  target = 5
     i
 if you found currentElement to equal your target; return the currentIndex = 2
 else
 nums = [1,3,5,6], target = 8
               i
 compare the target with current and the next element (i+1), 
    
    
 greater than current 
    currentElement (6) < target (8) AND
check if currentIndex is the Last of the elementsIndex
    insert the target at the end of the array AND
 and smaller than the next element
    undefined < 8
    
    
*/