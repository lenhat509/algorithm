// This is an input class. Do not edit.
class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class TreeInfo {
    constructor(rootIdx) {
        this.rootIdx = rootIdx;
    }
    increment() {
        this.rootIdx = this.rootIdx + 1;
    }
}

function reconstructBst(preOrderTraversalValues) {
    return reconstruct(
        preOrderTraversalValues,
        -Infinity,
        Infinity,
        new TreeInfo(0)
    );
}

const reconstruct = (array, lowerBound, upperBound, treeInfo) => {
    if (treeInfo.rootIdx >= array.length) return null;
    const rootValue = array[treeInfo.rootIdx];
    if (!(rootValue <= upperBound && rootValue >= lowerBound)) return null;
    treeInfo.increment();
    const leftNode = reconstruct(array, lowerBound, rootValue - 1, treeInfo);
    const rightNode = reconstruct(array, rootValue, upperBound, treeInfo);
    return new BST(rootValue, leftNode, rightNode);
};
