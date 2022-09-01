function longestPalindromicSubstring(string) {
    let leftNearestNeighbor = -1;
    let rightNearestNeighbor = 1;

    let returnString = "";
    while (leftNearestNeighbor < string.length) {
        let leftNeighbor = leftNearestNeighbor;
        let rightNeighbor = rightNearestNeighbor;
        while (
            leftNeighbor >= 0 &&
            rightNeighbor < string.length &&
            string.charAt(leftNeighbor) === string.charAt(rightNeighbor)
        ) {
            leftNeighbor--;
            rightNeighbor++;
        }
        const palindromicSubstring = string.slice(
            leftNeighbor + 1,
            rightNeighbor
        );
        returnString =
            palindromicSubstring.length > returnString.length
                ? palindromicSubstring
                : returnString;
        if ((rightNearestNeighbor - leftNearestNeighbor) % 2 === 0)
            leftNearestNeighbor++;
        else rightNearestNeighbor++;
    }
    return returnString;
}
