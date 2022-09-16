/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//     let sortedStr = []
//     for(let i = 0; i< strs.length; i++) {
//         let str = strs[i].split("").sort().join("")
//         sortedStr.push(str)
//     }
//     let result = []
//     let count = {}
//     for(let i = 0; i < sortedStr.length; i++) {
//         if(sortedStr[i] in count) {
//             let index = count[sortedStr[i]]
//             result[index].push(strs[i])
//         }
//         else {
//             let group = [strs[i]]
//             result.push(group)
//             count[sortedStr[i]] = result.length - 1
//         }
//     }
//     return result;
// }

var groupAnagrams = function (strs) {
    let groups = {};
    for (let i = 0; i < strs.length; i++) {
        let count = new Array(26);
        count.fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            let index = strs[i].charCodeAt(j) - "a".charCodeAt(0);
            count[index] += 1;
        }
        let key = count.join();
        if (key in groups) {
            groups[key].push(strs[i]);
        } else {
            groups[key] = [strs[i]];
        }
    }
    return Object.values(groups);
};
