var rob = function (nums) {
    let length = nums.length;
    if (length === 1) return nums[0];
    return Math.max(
        maxMoney(nums, 0, length - 2),
        maxMoney(nums, 1, length - 1)
    );
};

let maxMoney = (array, start, end) => {
    let length = start - end + 1;
    if (length === 1) return array[start];
    if (length === 2) return Math.max(array[start], array[start + 1]);
    let secondPrevs = array[start];
    let prevs = Math.max(array[start + 1], array[start]);
    for (let i = start + 2; i <= end; i++) {
        let prevsTem = prevs;
        prevs = Math.max(prevs, secondPrevs + array[i]);
        secondPrevs = prevsTem;
    }
    return prevs;
};
