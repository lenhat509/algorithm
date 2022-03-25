class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let node = new BST(value);
        let parent = this;
        let current = this;
        while (current !== null) {
            parent = current;
            if (current.value > value) current = current.left;
            else current = current.right;
        }
        if (parent.value > value) parent.left = node;
        else parent.right = node;
        // Do not edit the return statement of this method.
        return this;
    }

    contains(value) {
        let current = this;
        while (current !== null) {
            if (current.value > value) current = current.left;
            else if (current.value < value) current = current.right;
            else return true;
        }
        return false;
    }

    remove(value) {
        //find node containing target value
        //this.print(this);
        let current = this;
        let parent = null;
        while (current !== null) {
            if (current.value === value) break;
            parent = current;
            if (current.value < value) current = current.right;
            else current = current.left;
        }
        //assuming we always find the target value on the tree
        //find leftmost child on the right subtree
        const leftMostChild = this.getLeftMostChild(current);
        //the bst has right child
        if (leftMostChild !== null) current.value = leftMostChild.value;
        //the bst does not have right child
        else {
            //if the tree only has 1 node, do nothing
            if (parent === null && current.left === null) return;
            //root is the target node
            if (parent === null) {
                // important step to avoid geting wrong reference
                const leftChild = current.left;

                this.value = leftChild.value;
                this.left = leftChild.left;
                this.right = leftChild.right;
                return;
            }

            if (parent.left === current) parent.left = current.left;
            else parent.right = current.left;
        }

        // Do not edit the return statement of this method.
        return this;
    }

    getLeftMostChild(tree) {
        if (tree.right === null) return null;
        let parent = tree;
        let current = tree.right;
        while (current.left !== null) {
            parent = current;
            current = current.left;
        }
        if (parent.right === current) parent.right = current.right;
        else parent.left = current.right;

        return current;
    }
    print(tree) {
        const queue = [];
        queue.push(tree);
        while (queue.length !== 0) {
            const node = queue.shift();
            if (node === null) console.log("null");
            else console.log(node.value);
            if (node !== null) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }
}
