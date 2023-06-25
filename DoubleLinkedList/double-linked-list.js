class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    add(value, index) {
        const node = createNode(value);

        if (index === undefined || index === this.size) {
            if (this.tail) {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            } else {
                this.head = node;
                this.tail = node;
            }
        } else if (index === 0) {
            if (this.head) {
                this.head.prev = node;
                node.next = this.head;
                this.head = node;
            } else {
                this.head = node;
                this.tail = node;
            }
        } else {
            const prevNode = this.getNodeByIndex(index - 1);

            if (!prevNode) {
                throw new Error('Invalid index');
            }

            const nextNode = prevNode.next;

            prevNode.next = node;
            node.prev = prevNode;
            node.next = nextNode;

            if (nextNode) {
                nextNode.prev = node;
            } else {
                this.tail = node;
            }
        }

        this.size++;
    }

    removeByValue(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                const prevNode = currentNode.prev;
                const nextNode = currentNode.next;

                if (prevNode) {
                    prevNode.next = nextNode;
                } else {
                    this.head = nextNode;
                }

                if (nextNode) {
                    nextNode.prev = prevNode;
                } else {
                    this.tail = prevNode;
                }

                this.size--;
                break;
            }

            currentNode = currentNode.next;
        }
    }

    removeByIndex(index) {
        const nodeToRemove = this.getNodeByIndex(index);

        if (!nodeToRemove) {
            throw new Error('Invalid index');
        }

        const prevNode = nodeToRemove.prev;
        const nextNode = nodeToRemove.next;

        if (prevNode) {
            prevNode.next = nextNode;
        } else {
            this.head = nextNode;
        }

        if (nextNode) {
            nextNode.prev = prevNode;
        } else {
            this.tail = prevNode;
        }

        this.size--;
    }

    searchByIndex(index) {
        const node = this.getNodeByIndex(index);

        if (!node) {
            throw new Error('Invalid index');
        }

        return node;
    }

    searchByValue(value, startIndex = 0) {
        let currentNode = this.getNodeByIndex(startIndex);

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    getNodeByIndex(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index');
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode;
    }
}

function createNode(value) {
    return {
        value,
        next: null,
        prev: null,
    };
}