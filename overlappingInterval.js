function mergeOverlappingIntervals(array) {
    const result = [];
    array.sort((a, b) => a[0] - b[0]);
    let i = 0;
    let interval = array[0];
    while (i < array.length) {
        if (i !== array.length - 1 && interval[1] >= array[i + 1][0]) {
            interval[1] = Math.max(array[i + 1][1], interval[1]);
        } else {
            result.push(interval);
            if (i !== array.length - 1) interval = array[i + 1];
        }
        i++;
    }
    return result;
}
