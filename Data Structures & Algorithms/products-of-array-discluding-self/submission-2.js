class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = new Array(nums.length).fill(0);
        const right = new Array(nums.length).fill(0);;

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                left[0] = 1;
                right[nums.length - 1] = 1;
            }
            else {
                left[i] = nums[i - 1] * left[i - 1];
                right[nums.length - (i + 1)] = nums[(nums.length - (i + 1)) + 1] * right[(nums.length - (i + 1)) + 1];
            }
        }

        return left.map((value, index) => value * right[index]);
    }
}
