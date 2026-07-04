class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const leftMax = [];
        let left = 0;
        for (let i = 0; i < height.length; i++) {
            leftMax.push(left);
            left = Math.max(left, height[i]);
        }

        const rightMax = new Array(height.length);
        let right = 0;
        for (let i = height.length - 1; i >= 0; i--) {
            rightMax[i] = right;
            right = Math.max(right, height[i]);
        }

        let sum = 0;
        for (let i = 0; i < height.length; i++) {
            sum += Math.max(0, Math.min(leftMax[i], rightMax[i]) - height[i]);
        }

        return sum;
    }
}
