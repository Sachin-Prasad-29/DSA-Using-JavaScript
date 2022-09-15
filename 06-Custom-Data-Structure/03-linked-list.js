// Node class for the Each Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    // add node at the starting of the linked list
    prepend(value) {
        const node = new Node(value);
        //its first node make it head
        if (this.isEmpty()) {
            this.head = node;
        }
        // if node is not the first noe
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    // append node at last
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    //insert at some index

    // print the linked list
    print() {
        if (this.isEmpty()) {
            console.log.apply('The list is empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += ` ${curr.value} `;
                curr = curr.next;
            }

            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log(list.getSize());
console.log(list.isEmpty());
list.print();
list.prepend(10);
list.prepend(20);
list.print();
list.append(30);
list.print();
