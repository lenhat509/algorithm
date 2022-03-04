function radixSort(array) {
    let max = Math.max(...array);
    let power = 0;
    while (Math.floor(max / 10 ** power) > 0) {
        sort(array, power);
        power++;
    }
    return array;
}

function sort(array, power) {
    let counting = new Array(10).fill(0);
    let sortedArray = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        const remainder = Math.floor(array[i] / 10 ** power);
        const digit = remainder % 10;
        counting[digit]++;
    }

    for (let i = 1; i < counting.length; i++) {
        counting[i] += counting[i - 1];
    }
    for (let i = array.length - 1; i >= 0; i--) {
        const remainder = Math.floor(array[i] / 10 ** power);
        const digit = remainder % 10;
        const position = counting[digit];
        sortedArray[position - 1] = array[i];
        counting[digit]--;
    }
    console.log(array);
    console.log(sortedArray);
    for (let i = 0; i < array.length; i++) {
        array[i] = sortedArray[i];
    }
}
// alternative
function radixSort(array) {
    const max = Math.max(...array);
    let power = 0;
    let buckets = new Array(10);
    for (let i = 0; i < buckets.length; i++) buckets[i] = [];
    while (Math.floor(max / 10 ** power) > 0) {
        distribute(buckets, power, array);
        collect(buckets, array);
        power++;
    }

    return array;
}

function distribute(buckets, power, array) {
    for (let i = 0; i < array.length; i++) {
        let remainder = array[i] % 10 ** (power + 1);
        let digit = Math.floor(remainder / 10 ** power);
        buckets[digit].push(array[i]);
    }
}

function collect(buckets, array) {
    let index = 0;
    for (let i = 0; i < buckets.length; i++) {
        while (buckets[i].length > 0) {
            array[index++] = buckets[i].shift();
        }
    }
}

console.log(...radixSort(array));
