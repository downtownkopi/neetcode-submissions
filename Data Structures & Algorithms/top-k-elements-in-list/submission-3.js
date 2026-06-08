class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
      for (const num of nums) {
          count[num] = (count[num] || 0) + 1;
      }

      const freqs = Object.values(count);
      const maxFreq = Math.max(...freqs);

      const bucket = Array.from({ length: maxFreq + 1 }, () => []);
      for (const [num, freq] of Object.entries(count)) {
          bucket[freq].push(num);
      }

      const result = [];
      for (let freq = maxFreq; freq >= 1 && result.length < k; freq--) {
          result.push(...bucket[freq]);
      }
      return result.slice(0, k);
    }
}
