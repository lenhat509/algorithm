class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findSuccessor(tree, node) {
    let rightNode = node.right;
    if (rightNode !== null) return getLeftMostChild(rightNode);

    return getRightMostParent(node);
}

function getLeftMostChild(node) {
    let currentNode = node;
    while (currentNode.left) currentNode = currentNode.left;
    return currentNode;
}

function getRightMostParent(node) {
    let current = node;
    while (current.parent && current.parent.right === current)
        current = current.parent;
    return current.parent;
}
