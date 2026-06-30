class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        let lowest = Infinity;
        let highest = -Infinity;

        const set = new Set();
        for (const item of nums) {
            set.add(item);
            if (item < lowest) lowest = item;
            if (item > highest) highest = item;
        }

        let counter = 1;
        let maxCounter = 0;

        for (let i = lowest + 1; i <= highest; i++) {
            if (set.has(i) && set.has(i - 1)) {
                counter++;    
            } else {
                if (counter >= maxCounter) {
                    maxCounter = counter;
                    counter = 1;
                }
            }
        }

        return counter > maxCounter ? counter : maxCounter;
    }
}
