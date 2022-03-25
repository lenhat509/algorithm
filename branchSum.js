// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    let sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
}
function calculateBranchSums(node, currentSum, sums) {
    if (!node) return;
    currentSum += node.value;
    if (!node.left && !node.right) {
        sums.push(currentSum);
        return;
    }

    calculateBranchSums(node.left, currentSum, sums);
    calculateBranchSums(node.right, currentSum, sums);
}
