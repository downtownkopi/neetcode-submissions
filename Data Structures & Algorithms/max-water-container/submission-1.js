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
            const volume = (right - left) * Math.min(heights[left], heights[right]);
            if (volume > max) max = volume;

            if (heights[left] < heights[right]) left++;
            else right--;
        }
        
        return max;
    }
}
