// 0(2^n) O(m + n)
var uniquePaths = function (m, n) {
    return findPath(0, 0, m, n);
};

const findPath = (r, c, m, n) => {
    if (r === m - 1 && c === n - 1) return 1;
    if (r < 0 || r >= m || c < 0 || c >= n) return 0;

    let right = findPath(r, c + 1, m, n);
    let bottom = findPath(r + 1, c, m, n);
    return right + bottom;
};

// O(m * n) O(n)
var uniquePaths = function (m, n) {
    let row = new Array(n);
    row.fill(1);

    for (let i = m - 2; i >= 0; i--)
        for (let j = n - 2; j >= 0; j--) row[j] = row[j] + row[j + 1];
    return row[0];
};
