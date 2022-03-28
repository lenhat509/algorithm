function moveElementToEnd(array, toMove) {
    let head = 0;
    let tail = array.length - 1;

    while (head < tail) {
        while (array[tail] === toMove) tail--;

        if (head >= tail) break;

        if (array[head] === toMove) {
            let temp = array[head];
            array[head] = array[tail];
            array[tail] = temp;
        }
        head++;
    }
    return array;
}
