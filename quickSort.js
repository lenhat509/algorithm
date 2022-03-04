function quickSort(array) {
    myQuickSort(array, 0, array.length - 1);
}

function myQuickSort(array, start, end) {
    if (start < end) {
        const pivot = partition(array, start, end);
        //console.log(pivot, start, end)
        myQuickSort(array, start, pivot - 1);
        myQuickSort(array, pivot + 1, end);
    }
}

function partition(array, start, end) {
    //console.log(start, end)
    let pivot = start;
    let m = start + 1;
    let k = start + 1;
    while (k < end + 1) {
        if (array[k] > array[pivot]) k++;
        else {
            let temp = array[m];
            array[m] = array[k];
            array[k] = temp;
            m++;
            k++;
        }
    }

    let temp = array[pivot];
    array[pivot] = array[m - 1];
    array[m - 1] = temp;
    return m - 1;
}

quickSort(array);
console.log(array);
