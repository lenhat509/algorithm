function findClosestValueInBst(tree, target) {
    return getClosest(tree, target, tree.value);
}

function getClosest(tree, target, closest) {
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value))
        closest = tree.value;

    if (tree.value > target) return getClosest(tree.left, target, closest);
    else if (tree.value < target)
        return getClosest(tree.right, target, closest);
    else return tree.value;
}
// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
