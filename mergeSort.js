function mergeSort(array) {
    if (array.length == 1) {
        return array;
    } else {
        let start = 0;
        let end = array.length - 1;
        let middle = Math.floor((end - start) / 2);
        const firstArray = mergeSort(array.slice(start, middle + 1));
        const secondArray = mergeSort(array.slice(middle + 1, end + 1));

        let mergedArray = [];
        let firstHead = 0;
        let secondHead = 0;
        while (
            firstHead < firstArray.length &&
            secondHead < secondArray.length
        ) {
            if (firstArray[firstHead] < secondArray[secondHead]) {
                mergedArray.push(firstArray[firstHead]);
                firstHead++;
            } else {
                mergedArray.push(secondArray[secondHead]);
                secondHead++;
            }
        }
        while (secondHead < secondArray.length) {
            mergedArray.push(secondArray[secondHead]);
            secondHead++;
        }

        while (firstHead < firstArray.length) {
            mergedArray.push(firstArray[firstHead]);
            firstHead++;
        }

        return mergedArray;
    }
}
