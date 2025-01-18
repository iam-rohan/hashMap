class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value, null);
      return;
    }
    let tmp = this.head;
    while (tmp.nextNode != null) tmp = tmp.nextNode;

    tmp.nextNode = new Node(value, null);
  }

  find(key) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.value == key) {
        return tmp;
      }
      tmp = tmp.nextNode;
    }
    return null;
  }
}
