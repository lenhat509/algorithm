const getMinCost = (reds, blues, blueCost) => {
    const redCosts = [0];
    const blueCosts = [blueCost];
    const numberCities = reds.length;
    for (let i = 1; i <= numberCities; i++) {
        let redMinCost = Math.min(
            redCosts[i - 1] + reds[i - 1],
            blueCosts[i - 1] + reds[i - 1]
        );
        let blueMinCost = Math.min(
            redCosts[i - 1] + blues[i - 1] + blueCost,
            blueCosts[i - 1] + blues[i - 1]
        );
        redCosts.push(redMinCost);
        blueCosts.push(blueMinCost);
    }
    return Math.min(redCosts[numberCities], blueCosts[numberCities]);
};

console.log(getMinCost([2, 1, 4, 5], [3, 2, 1, 2], 2));
