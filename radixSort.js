function radixSort(array) {
    const max = Math.max(...array);
    let power = 0;
    let buckets = new Array(10);
    for (let i = 0; i < buckets.length; i++) buckets[i] = new Queue();
    while (Math.floor(max / 10 ** power) > 0) {
        distribute(buckets, power, array);
        collect(buckets, array);
        power++;
    }

    return array;
}

function distribute(buckets, power, array) {
    for (let i = 0; i < array.length; i++) {
        let remainder = Math.floor(array[i] / 10 ** power);
        let digit = remainder % 10;
        buckets[digit].enqueue(array[i]);
    }
}

function collect(buckets, array) {
    let index = 0;
    for (let i = 0; i < buckets.length; i++) {
        while (buckets[i].size > 0) {
            array[index++] = buckets[i].dequeue();
        }
    }
}
class Queue {
    head = null;
    tail = null;
    size = 0;
    constructor() {}
    enqueue(value) {
        let node = new Node(value);
        if (this.size == 0) {
            this.head = node;
            this.tail = node;
            this.size++;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
            this.size++;
        }
    }
    dequeue() {
        if (this.size > 0) {
            if (this.head == this.tail) {
                let temp = this.head;
                this.head = null;
                this.tail = null;
                this.size--;
                return temp.value;
            } else {
                let temp = this.head;
                this.head = this.head.next;
                temp.next = null;
                this.size--;
                return temp.value;
            }
        }
        return null;
    }
}
class Node {
    value = null;
    next = null;
    constructor(value) {
        this.value = value;
    }
}
// alternative
function radixSort(array) {
    const max = Math.max(...array);
    let power = 0;
    let buckets = new Array(10);
    for (let i = 0; i < buckets.length; i++) buckets[i] = [];
    while (Math.floor(max / 10 ** power) > 0) {
        distribute(buckets, power, array);
        collect(buckets, array);
        power++;
    }

    return array;
}

function distribute(buckets, power, array) {
    for (let i = 0; i < array.length; i++) {
        let remainder = array[i] % 10 ** (power + 1);
        let digit = Math.floor(remainder / 10 ** power);
        buckets[digit].push(array[i]);
    }
}

function collect(buckets, array) {
    let index = 0;
    for (let i = 0; i < buckets.length; i++) {
        while (buckets[i].length > 0) {
            array[index++] = buckets[i].shift();
        }
    }
}

console.log(...radixSort(array));
