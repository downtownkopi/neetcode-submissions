class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const waiting = [];
        const result = new Array(temperatures.length).fill(0);
        
        for (let i = 0; i < temperatures.length; i++) {
            if (waiting.length === 0) {
                waiting.push({
                    i: i,
                    temperature: temperatures[i],
                });
                continue;
            }

            while (waiting.length !== 0 && temperatures[i] > waiting[waiting.length - 1].temperature) {
                result[waiting[waiting.length - 1].i] = i - waiting[waiting.length - 1].i;
                waiting.pop();
            }

            waiting.push({
                i: i,
                temperature: temperatures[i],
            });
        }

        return result;
    }
}
