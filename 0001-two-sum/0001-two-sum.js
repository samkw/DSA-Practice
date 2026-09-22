/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const checkedValues = {};

    for(let i=0;i<nums.length;i++)
    {
        const complement = target - nums[i];
        if(complement in checkedValues)
            return [checkedValues[complement],i];
        checkedValues[nums[i]]=i;
    }
}