class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedMap = {};
        for (const str of strs) {
            const countMap = {};
            for (const ltr of str) {
                if (!countMap[ltr]) countMap[ltr] = 0;
                countMap[ltr]++;
            }
            const sortedStr = Object.keys(countMap).sort().map(key => key + countMap[key]).join('');
            if (!sortedMap[sortedStr]) sortedMap[sortedStr] = [];
            sortedMap[sortedStr].push(str);
        }
        console.log(sortedMap);
        return Object.values(sortedMap);
    }
}
