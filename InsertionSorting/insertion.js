function findInsertionIndex(arr, i) {
    let insertionIndex = 0;

    while (insertionIndex < i && arr[insertionIndex] < arr[i]) {
        insertionIndex++;
    }

    return insertionIndex;
}

function shiftElements(arr, insertionIndex, i) {
    for (let j = i; j > insertionIndex; j--) {
        arr[j] = arr[j - 1];
    }

    return arr;
}

function insertionSort(array) {
    const len = array.length;

    for (let i = 1; i < len; i++) {
        const current = array[i];
        const insertionIndex = findInsertionIndex(array, i);

        shiftElements(array, insertionIndex, i);

        array[insertionIndex] = current;
    }

    return array;
}
