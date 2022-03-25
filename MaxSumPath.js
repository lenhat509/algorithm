function maxPathSum(tree) {
    const [maxSumToRoot, maxSum] = getMaxPathSum(tree);
    return maxSum;
}

function getMaxPathSum(tree) {
    if (tree === null) return [0, -Infinity];
    const [leftMaxSumBranch, leftMaxSum] = getMaxPathSum(tree.left);
    const [rightMaxSumBranch, rightMaxSum] = getMaxPathSum(tree.right);
    const childMaxSum = Math.max(leftMaxSumBranch, rightMaxSumBranch);
    const maxSumBranch = Math.max(childMaxSum + tree.value, tree.value);
    // find maximum sum that the subtree could possibly have
    const maxSumOverNode = leftMaxSumBranch + tree.value + rightMaxSumBranch;
    const maxSum = Math.max(
        maxSumOverNode,
        maxSumBranch,
        leftMaxSum,
        rightMaxSum
    );
    return [maxSumBranch, maxSum];
}
