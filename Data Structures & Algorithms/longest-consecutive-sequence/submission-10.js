class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const set = new Set(nums);

        let maxCount = -Infinity;
        for (const num of set) {
            let count = 1;
            let start = num + 1;
            while (set.has(start)) {
                count++;
                start++;
            }
            if (count > maxCount) maxCount = count;
        }

        return maxCount;
    }
}
