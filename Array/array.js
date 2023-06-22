class MyArray {
    constructor(initialSize = 1) {
        if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
            throw new Error('Длина массива должна быть целым числом');
        }

        if (!(initialSize > 0)) {
            throw new Error('Размер массива должен быть больше нуля');
        }

        this.size = initialSize;
        this.memory = allocate(initialSize);
        this.length = 0;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Индекс находится за пределами массива');
        }

        return this.memory[index];
    }

    set(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Индекс находится за пределами массива');
        }

        this.memory[index] = value;
    }

    add(value, index) {
        if (index === undefined) {
            index = this.length;
        } else if (index < 0 || index > this.length) {
            throw new Error('Индекс находится за пределами массива');
        }

        if (this.length === this.size) {
            this._resizeMemory();
        }

        for (let i = this.length - 1; i >= index; i--) {
            this.memory[i + 1] = this.memory[i];
        }

        this.memory[index] = value;
        this.length++;

        return this.length;
    }

    delete(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Индекс находится за пределами массива');
        }

        for (let i = index; i < this.length - 1; i++) {
            this.memory[i] = this.memory[i + 1];
        }

        this.memory[this.length - 1] = undefined;
        this.length--;

        return this.length;
    }

    _resizeMemory() {
        const newSize = this.size * 2;
        const newMemory = allocate(newSize);

        for (let i = 0; i < this.length; i++) {
            newMemory[i] = this.memory[i];
        }

        this.size = newSize;
        this.memory = newMemory;
    }
}

function allocate(size) {
    const memory = {};

    for (let i = 0; i < size; i++) {
        memory[i] = undefined;
    }

    return memory;
}