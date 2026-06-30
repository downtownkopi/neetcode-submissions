class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        nums.sort((a, b) => a - b);

        console.log(nums);

        let counter = 1;
        let maxCounter = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i-1] === 0) continue
            if (nums[i] - nums[i-1] === 1) {
                counter++;    
            } else {
                if (counter >= maxCounter) {
                    maxCounter = counter;
                    counter = 1;
                }
            }
        }

        console.log(`maxCounter: ${maxCounter}`)

        return counter > maxCounter ? counter : maxCounter;
    }
}
