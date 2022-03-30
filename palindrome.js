function isPalindrome(string) {
    let head = 0;
    let tail = string.length - 1;

    while (head <= tail) {
        if (string[head] === string[tail]) {
            head++;
            tail--;
        } else return false;
    }
    return true;
}
