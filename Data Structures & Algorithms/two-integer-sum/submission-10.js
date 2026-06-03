class Solution {
    twoSum(nums, target) {
        const valToIdx = {};

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (valToIdx[complement] !== undefined) {
                return [valToIdx[complement], i];
            }

            valToIdx[nums[i]] = i;
        }

        return [];
    }
}