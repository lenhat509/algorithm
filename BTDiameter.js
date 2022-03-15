// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function binaryTreeDiameter(tree) {
    const [maxBranch, maxPath] = countDiameter(tree);
    return maxPath - 1;
}

function countDiameter(tree) {
    if (tree === null) return [0, 0];
    const [leftMaxHeight, leftMaxNodes] = countDiameter(tree.left);
    const [rightMaxHeight, rightMaxNodes] = countDiameter(tree.right);
    const maxHeight = 1 + Math.max(leftMaxHeight, rightMaxHeight);
    const totalMaxNodes = leftMaxHeight + rightMaxHeight + 1;
    const maxPath = Math.max(totalMaxNodes, leftMaxNodes, rightMaxNodes);
    return [maxHeight, maxPath];
}

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;
