### Двусвязный список
#### Реализуйте двусвязный список, который может:
- добавлять элементы в конец списка по индексу и значению,
- удалять элементы по индексу и значению,
- искать элемент по индексу и значению.

Обратите внимание, что поиск по индексу и поиск по значению должны возвращать именно ноду.

#### Пример двусвязного списка:
```javascript
const list = new DoublyLinkedList();
list.add(5);
list.add(3);
list.add(-13);
console.log(list.head);

/* {
    value: 5,
    prev: null,
    next: {
        value: 3,
        prev: {Ссылка на элемент со значением 5},
        next: {
                value: -13,
                prev: {Ссылка на элемент со значением 3},
                next: null
            }
        }
    } */
```