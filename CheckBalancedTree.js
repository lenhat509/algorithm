class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function heightBalancedBinaryTree(tree) {
    const [maxHeight, isBalanced] = getHeight(tree);
    return isBalanced;
}

function getHeight(tree) {
    if (tree === null) return [0, true];
    const [leftMaxHeight, isLeftBalanced] = getHeight(tree.left);
    const [rightMaxHeight, isRightBalanced] = getHeight(tree.right);

    if (
        Math.abs(leftMaxHeight - rightMaxHeight) <= 1 &&
        isLeftBalanced &&
        isRightBalanced
    )
        return [Math.max(leftMaxHeight, rightMaxHeight) + 1, true];

    return [Math.max(leftMaxHeight, rightMaxHeight) + 1, false];
}
