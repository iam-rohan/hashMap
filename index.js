import LinkedList from "./linkedList";

class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = Array(this.capacity).fill(null);
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
    let index = this.hash(key);
    //decides when to regrow
    if (this.size >= this.capacity * this.loadFactor) {
      grow();
    }

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }

    const existingNode = this.buckets[index].find((node) => node.key === key);

    if (existingNode) {
      existingNode.value = value;
    } else {
      this.buckets[index].append({ key, value });
      this.size++;
    }
  }

  grow() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array(this.capacity).fill(null);
    this.size = 0;

    //reset all the keys after creation of new buckets and capacity increase
    oldBuckets.forEach((bucket) => {
      if (bucket) {
        let currentNode = bucket.head;
        while (currentNode) {
          this.set(currentNode.value.key, currentNode.value.value);
          currentNode = currentNode.nextNode;
        }
      }
    });
  }

  get(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    let bucket = this.buckets[index];

    let current = bucket.head;

    while (current) {
      if (current.value.key === key) {
        return current.value.value;
      }
      current = current.nextNode;
    }
    return null;
  }

  has(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    let bucket = this.buckets[index];

    let current = bucket.head;

    while (current) {
      if (current.value.key === key) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  remove(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];

    if (!bucket) {
      return false;
    }

    const removed = bucket.remove((node) => node.value === key);

    if (removed) {
      this.size--;
      return true;
    }
    return false;
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      if (bucket) {
        let current = bucket.head;
        while (current) {
          count++;
          current = current.nextNode;
        }
      }
    }
    return count;
  }

  clear() {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = [];
    this.size = 0;
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      if (bucket) {
        let current = bucket.head;
        while (current) {
          keysArray.push(current.key);
          current.nextNode;
        }
      }
    }
    return keysArray;
  }

  values() {
    let valuesArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      if (bucket) {
        let current = bucket.head;
        while (current) {
          keysArray.push(current.value);
          current.nextNode;
        }
      }
    }
    return valuesArray;
  }

  entries() {
    let entriesArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      if (bucket) {
        let current = bucket.head;
        while (current) {
          keysArray.push(current);
          current.nextNode;
        }
      }
    }
    return entriesArray;
  }
}
