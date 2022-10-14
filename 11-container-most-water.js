var maxArea = function (height) {
    let maxWater = 0;
    let first = 0;
    let second = height.length - 1;
    while (first !== second) {
        let distance = second - first;
        let ammount = distance * Math.min(height[first], height[second]);
        if (ammount > maxWater) maxWater = ammount;
        if (height[first] > height[second]) second--;
        else first++;
    }
    return maxWater;
};
