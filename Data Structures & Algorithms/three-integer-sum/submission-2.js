class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);

        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const sum = 0 - nums[i];
            
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const total = nums[left] + nums[right];
                if (total > sum) {
                    right--;
                } else if (total < sum) {
                    left++;
                } else {
                    if (!map.has(`[${nums[i]},${nums[left]},${nums[right]}]`)) map.set(`[${nums[i]},${nums[left]},${nums[right]}]`, [nums[i],nums[left],nums[right]]);
                    left++;
                    right--;
                }
            }
        }

        return Array.from(map.values());
    }
}
