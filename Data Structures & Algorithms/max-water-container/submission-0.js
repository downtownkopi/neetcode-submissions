class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let max = -Infinity;

        while (left < right) {
            let innerLeft = left;
            let innerRight = right;

            while (innerLeft < innerRight) {
                const volume = (innerRight - innerLeft) * Math.min(heights[innerLeft], heights[innerRight]);
                if (volume > max) max = volume;

                innerRight--;
            }
            
            left++;
        }
        
        return max;
    }
}
