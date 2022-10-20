// O(n^2) O(1)
var maxProfit = function (prices) {
    let max = 0;
    let length = prices.length;
    for (let i = 0; i < length - 1; i++)
        for (let j = i + 1; j < length; j++) {
            let diff = prices[j] - prices[i];
            if (diff > max) max = diff;
        }
    return max;
};
// O(n) O(1)
var maxProfit = function (prices) {
    let maxProfit = 0;
    let length = prices.length;
    let left = 0;
    let right = 1;
    while (right < length) {
        let profit = prices[right] - prices[left];
        if (profit > 0) {
            if (profit > maxProfit) maxProfit = profit;
            right++;
        } else {
            left = right;
            right = left + 1;
        }
    }
    return maxProfit;
};
