function invertBinaryTree(tree) {
    const queue = [tree];
    while (queue.length !== 0) {
        const node = queue.shift();
        if (node === null) continue;
        swap(node);
        queue.push(node.left);
        queue.push(node.right);
    }
}

function swap(treeNode) {
    const temp = treeNode.left;
    treeNode.left = treeNode.right;
    treeNode.right = temp;
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
