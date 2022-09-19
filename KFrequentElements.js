/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function(nums, k) {
//     let count = {}
//     for(let i = 0; i< nums.length; i++) {
//         if(nums[i] in count)
//             count[nums[i]] += 1
//         else count[nums[i]] = 1
//     }
//     let entries = Object.entries(count)
//     entries.sort((a, b) => b[1] - a[1])
//     let result = []
//     for(let i = 0; i< k; i++) {
//         result.push(parseInt(entries[i][0]))
//     }
//     return result
// };

var topKFrequent = function (nums, k) {
    let count = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in count) count[nums[i]] += 1;
        else count[nums[i]] = 1;
    }
    let n = nums.length;
    let sortArray = new Array(n + 1);
    sortArray.fill(null);
    for (let integer in count) {
        let index = count[integer];
        if (sortArray[index] === null) sortArray[index] = [];
        sortArray[index].push(parseInt(integer));
    }
    let result = [];
    for (let i = n; i >= 0; i--) {
        if (k === 0) break;
        if (sortArray[i] === null) continue;
        result.push(...sortArray[i]);
        k -= sortArray[i].length;
    }
    return result;
};
