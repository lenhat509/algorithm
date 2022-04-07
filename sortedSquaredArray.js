function sortedSquaredArray(array) {
    const result = new Array(array.lengt).fill(0);
    let head = 0;
    let tail = array.length - 1;
    for (let index = array.length - 1; index >= 0; index--) {
        if (Math.abs(array[head]) > Math.abs(array[tail])) {
            let square = Math.pow(array[head], 2);
            result[index] = square;
            head++;
        } else {
            let square = Math.pow(array[tail], 2);
            result[index] = square;
            tail--;
        }
    }

    return result;
}
