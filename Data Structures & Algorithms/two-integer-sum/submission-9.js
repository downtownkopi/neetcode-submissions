class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const valToIdx = {};
        for (let i = 0; i < nums.length; i++) {
            if (valToIdx[target - nums[i]] !== undefined) return [valToIdx[target - nums[i]], i];
            else valToIdx[nums[i]] = i;
        }

        return [];
    }
}
