function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let minimunDiff = Infinity;
    let pair = [null, null];

    let firstPointer = 0;
    let secondPointer = 0;

    while (firstPointer < arrayOne.length && secondPointer < arrayTwo.length) {
        let diff = Math.abs(arrayOne[firstPointer] - arrayTwo[secondPointer]);
        if (diff < minimunDiff) {
            minimunDiff = diff;
            pair[0] = arrayOne[firstPointer];
            pair[1] = arrayTwo[secondPointer];
        }

        if (arrayOne[firstPointer] === arrayTwo[secondPointer]) break;
        else if (arrayOne[firstPointer] > arrayTwo[secondPointer])
            secondPointer++;
        else firstPointer++;
    }
    return pair;
}
