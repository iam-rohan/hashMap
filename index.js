import LinkedList from "./linkedList";

class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = [];
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    let index = hash(key);
    //decides when to regrow
    if (Math.floor((this.buckets.length + 1) * this.loadFactor) >= this.size) {
      grow();
    }

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }

    const existingNode = this.buckets[index].find((node) => node.key === key);
  }
}
