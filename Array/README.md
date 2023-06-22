## Реализация массива
#### Реализуйте массив с методами доступа, изменения, добавления и удаления элементов.
`При попытке доступа за пределы текущей длины массива this.length методы должны кидать любую ошибку.
Когда длина массива приближается к его максимальному размеру — выделите памяти в два раза больше, применяя функцию allocate.`

```javascript
const array = new MyArray(3);
console.log(array.length); // 0

array.add('A'); // Добавляет 'A' в конец массива
console.log(array.length); // 1
console.log(array.get(0)); // 'A'

array.add('B', 0); // Добавляет 'B' в начало массива
console.log(array.length); // 2
console.log(array.get(0)); // 'B'
console.log(array.get(1)); // 'A'

array.set(1, 'C'); // Заменяет значение второго элемента на 'C'
console.log(array.get(1)); // 'C'

array.delete(0); // Удаляет первый элемент
console.log(array.length); // 1
console.log(array.get(0)); // 'C'
```

