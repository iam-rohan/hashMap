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

  find(value) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.value == value) {
        return tmp;
      }
      tmp = tmp.nextNode;
    }
    return null;
  }

  removeAt(index) {
    if (this.head == null) {
      console.log("List is empty");
      return null;
    }

    if (index == 0) {
      this.head = this.head.nextNode;
      return;
    }

    let tmp = this.head;
    let count = 0;
    while (tmp.nextNode && count < index - 1) {
      tmp = tmp.nextNode;
      count++;
    }
    tmp.nextNode = tmp.nextNode.nextNode;
  }
}
