//O(nlog n)
function twoNumberSum(array, targetSum) {
    let myArray = [...array];
    myArray.sort((a, b) => a - b);
    let head = 0;
    let tail = myArray.length - 1;
    let result = [];
    while (head != tail) {
        if (myArray[head] + myArray[tail] == targetSum) {
            result = [myArray[head], myArray[tail]];
            break;
        } else if (myArray[head] + myArray[tail] < targetSum) head++;
        else tail--;
    }

    return result;
}
//O(n)
function twoNumberSum(array, targetSum) {
    const differences = {};
    for (const num of array) {
        const difference = targetSum - num;
        console.log(differences);
        if (differences[difference]) {
            return [num, difference];
        } else differences[difference] = difference;
    }
    return [];
}

console.log(twoNumberSum(array, -5));
