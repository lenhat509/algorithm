class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.list = new LinkedList();
        this.map = new Map();
    }
    get(key) {
        let map = this.map;
        if (map.has(key)) {
            let node = map.get(key);
            let value = node.value;
            this.list.remove(node);
            let newNode = this.list.addMRU(value, key);
            map.set(key, newNode);
            return value;
        } else return -1;
    }
    put(key, value) {
        let map = this.map;
        if (map.has(key)) {
            let node = map.get(key);
            this.list.remove(node);
            let newNode = this.list.addMRU(value, key);
            map.set(key, newNode);
        } else {
            let newNode = this.list.addMRU(value, key);
            map.set(key, newNode);
            if (this.list.size > this.capacity) {
                let keyLRU = this.list.head.key;
                this.list.removeLRU();
                map.delete(keyLRU);
            }
        }
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addMRU(value, key) {
        let node = new Node(value, key, null, null);
        if (this.tail !== null) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.size++;
        return node;
    }
    removeLRU() {
        if (this.head !== null) {
            let next = this.head.next;
            if (next !== null) next.previous = null;
            this.head = this.head.next;
            this.size--;
        }
    }
    remove(node) {
        if (node !== null) {
            let previous = node.previous;
            let next = node.next;

            if (node === this.head) this.head = this.head.next;
            if (node === this.tail) this.tail = this.tail.previous;

            if (previous !== null) previous.next = next;
            if (next !== null) next.previous = previous;
            this.size--;
        }
    }
}
class Node {
    constructor(value, key, next, previous) {
        this.value = value;
        this.key = key;
        this.next = next;
        this.previous = previous;
    }
}
