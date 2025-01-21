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
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }

    tmp.nextNode = new Node(value, null);
  }

  find(callback) {
    let tmp = this.head;
    while (tmp !== null) {
      if (callback(tmp.value)) {
        console.log(tmp.value);
        return tmp;
      }
      tmp = tmp.nextNode;
    }
    console.log(`Node not found.`);
    return null;
  }

  remove(callback) {
    if (!this.head) return null;

    // If the head matches the condition, remove it
    if (callback(this.head.value)) {
      const removedNode = this.head;
      this.head = this.head.nextNode;
      return removedNode;
    }

    // Traverse the list to find the node to remove
    let current = this.head;
    while (current.nextNode) {
      if (callback(current.nextNode.value)) {
        const removedNode = current.nextNode;
        current.nextNode = current.nextNode.nextNode;
        return removedNode;
      }
      current = current.nextNode;
    }

    // Return null if no node matches the condition
    return null;
  }
}
