function minHeightBst(array) {
    let tree = new BST(null);
    insertMinHeight(tree, array, 0, array.length - 1);
    return tree;
}

function insertMinHeight(tree, array, min, max) {
    if (min > max) return;
    let middleIndex = Math.floor((min + max) / 2);
    if (tree.value === null) tree.value = array[middleIndex];
    else tree.insert(array[middleIndex]);

    insertMinHeight(tree, array, min, middleIndex - 1);
    insertMinHeight(tree, array, middleIndex + 1, max);
}

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}
