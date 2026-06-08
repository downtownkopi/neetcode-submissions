class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numToCount = {};
        const countToNum = {};
        for (let i = 0; i < nums.length; i++) {
            if (!numToCount[nums[i]]) numToCount[nums[i]] = 0;
            numToCount[nums[i]]++;
        }
        for (const [num, count] of Object.entries(numToCount)) {
            if (!countToNum[count]) countToNum[count] = [];
            countToNum[count].push(num);
        }
        const sortedNum = [...new Set(Object.values(countToNum))].sort((a, b) => numToCount[a] - numToCount[b]).flat();
        return sortedNum.slice(-k);
    }
}
