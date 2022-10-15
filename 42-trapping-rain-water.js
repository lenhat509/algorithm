// O(n^2) O(1)
var trap = function (height) {
    let water = 0;
    let current = 0;
    while (current < height.length - 1) {
        //find first larger bar or tallest bar
        let nextTaller = current;
        let tallest = current + 1;
        for (let i = current + 1; i < height.length; i++)
            if (height[i] >= height[current]) {
                nextTaller = i;
                break;
            }
        for (let i = current + 1; i < height.length; i++)
            if (height[i] > height[tallest]) tallest = i;
        let next;
        if (nextTaller !== current) next = nextTaller;
        else if (tallest !== current + 1) next = tallest;
        else {
            current++;
            continue;
        }

        // calculate trap water
        let maxWater =
            (next - current - 1) * Math.min(height[current], height[next]);
        let sumHeights = 0;
        for (let i = current + 1; i <= next - 1; i++) sumHeights += height[i];
        water += maxWater - sumHeights;
        current = next;
    }
    return water;
};

// O(n) O(n)
// water trapped above = min(maxL, maxR) - height
var trap = function (height) {
    let blocks = 0;
    let length = height.length;

    let maxLeft = new Array(length);
    maxLeft[0] = 0;
    let maxRight = new Array(length);
    maxRight[length - 1] = 0;

    for (let i = 1; i < length; i++)
        maxLeft[i] = Math.max(height[i - 1], maxLeft[i - 1]);
    for (let i = length - 2; i >= 0; i--)
        maxRight[i] = Math.max(height[i + 1], maxRight[i + 1]);

    for (let i = 0; i < length; i++) {
        var value = Math.min(maxLeft[i], maxRight[i]) - height[i];
        if (value > 0) blocks += value;
    }
    return blocks;
};

// O(n) O(1)
var trap = function (height) {
    let blocks = 0;
    let length = height.length;

    let maxRight = height[length - 1];
    let maxLeft = height[0];

    let left = 0;
    let right = length - 1;

    while (left < right) {
        if (maxLeft <= maxRight) {
            left++;
            let value = maxLeft - height[left];
            if (value > 0) blocks += value;
            if (height[left] > maxLeft) maxLeft = height[left];
        } else {
            right--;
            let value = maxRight - height[right];
            if (value > 0) blocks += value;
            if (height[right] > maxRight) maxRight = height[right];
        }
    }
    return blocks;
};
