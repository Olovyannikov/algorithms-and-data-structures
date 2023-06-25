class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Ставит элемент в очередь.
    // Возвращает новый размер очереди.
    enqueue(value) {
        const node = { value, next: null, prev: null };
        if (this.tail) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.size++;
        return this.size;
    }

    // Убирает элемент из очереди.
    // Если очередь пустая, кидает ошибку.
    // Возвращает удалённый элемент.
    dequeue() {
        if (!this.head) {
            throw new Error('Queue is empty');
        }
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.size--;
        return value;
    }

    // Возвращает элемент в начале очереди.
    peek() {
        if (!this.head) {
            throw new Error('Queue is empty');
        }
        return this.head;
    }

    // Если очередь пустая, возвращает true. В противном случае –– false.
    isEmpty() {
        return !this.head;
    }
}