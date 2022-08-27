// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class LastestNode {
    constructor(numberOfNodesVisited, lastestValue) {
        this.numberOfNodesVisited = numberOfNodesVisited;
        this.lastestValue = lastestValue;
    }
}

function findKthLargestValueInBst(tree, k) {
    const lastestNode = new LastestNode(0, null);
    reverseInorderTraverse(tree, lastestNode, k);
    return lastestNode.lastestValue;
}

const reverseInorderTraverse = (node, lastestNode, k) => {
    if (node === null) return;
    reverseInorderTraverse(node.right, lastestNode, k);
    if (lastestNode.numberOfNodesVisited < k) {
        lastestNode.numberOfNodesVisited++;
        lastestNode.lastestValue = node.value;
        reverseInorderTraverse(node.left, lastestNode, k);
    }
};
