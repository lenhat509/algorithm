function isMonotonic(array) {
    let monotoneIncrease = true;
    let monotoneDecrease = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) monotoneDecrease = false;
        if (array[i] < array[i - 1]) monotoneIncrease = false;
    }

    return monotoneIncrease || monotoneDecrease;
}
