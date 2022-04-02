// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    return validateBSTNode(tree, -Infinity, Infinity);
}

function validateBSTNode(tree, min, max) {
    if (tree === null) return true;

    // min <= tree.value < max -> true
    if (tree.value < min || tree.value >= max) return false;

    if (
        validateBSTNode(tree.left, min, tree.value) &&
        validateBSTNode(tree.right, tree.value, max)
    )
        return true;
    else return false;
}
