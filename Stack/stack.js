class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const node = { value, next: null, prev: null };
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this.size;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        const removedNode = this.tail;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
        }
        this.size--;
        return removedNode.value;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.tail;
    }

    isEmpty() {
        return this.size === 0;
    }
}