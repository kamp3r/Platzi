let singlyLinkedList = {
    head: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    },
  };
  
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class MySinglyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
  
      this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
  }
  
  let myLinkedList = new MySinglyLinkedList(1);
    myLinkedList.append(2);
    myLinkedList.append(3);
    myLinkedList.append(4);
    myLinkedList.append(5);

