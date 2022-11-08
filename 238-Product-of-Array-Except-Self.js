var productExceptSelf = function (nums) {
    let out = new Array(nums.length);
    out[0] = 1;
    let pre = 1;
    let post = 1;
    for (let i = 1; i < nums.length; i++) {
        pre *= nums[i - 1];
        out[i] = pre;
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        post *= nums[i + 1];
        out[i] = out[i] * post;
    }
    return out;
};
