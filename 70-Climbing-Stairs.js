/**
 * @param {number} n
 * @return {number}
 */

/*
current level : i
number of ways (i) = number of ways (i - 2) + number of ways(i - 1)

*/
// var climbStairs = function(n) {
//     if(n === 1)
//         return 1
//     if(n === 2)
//         return 2
//     let array = new Array(n)
//     array[0] = 1
//     array[1] = 2
//     for(let i = 2; i < n; i++)
//         array[i] = array[i - 2] + array[i - 1]
//     return array[n - 1]
// };

var climbStairs = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let c1 = 1;
    let c2 = 2;
    for (let i = 2; i < n; i++) {
        let sum = c1 + c2;
        c1 = c2;
        c2 = sum;
    }
    return c2;
};
