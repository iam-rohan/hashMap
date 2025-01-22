import LinkedList from "./linkedList.js";

export default class HashMap {
  constructor(loadFactor) {
    this.loadFactor = loadFactor;
    this.capacity = 16;
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
    console.log("Bucket length: " + this.buckets.length);

    if (this.size / this.buckets.length > 0.75) {
      console.log("Growing hash map...");
      this.grow();
    }

    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }

    const existingNode = this.buckets[index].find((node) => {
      console.log("Found previous node entry for key:", key);
      return node.key === key;
    });

    if (existingNode) {
      console.log(`Updating value for key: ${key}, old value: ${existingNode.value.value}, new value: ${value}`);
      existingNode.value.value = value;
    } else {
      console.log(`Inserting new key: ${key}, value: ${value}`);
      this.buckets[index].append({ key, value });
      this.size++;
    }
  }

  grow() {
    const newBuckets = new Array(this.buckets.length * 2).fill(null);
    const oldBuckets = this.buckets;

    this.buckets = newBuckets;
    this.size = 0;

    for (const bucket of oldBuckets) {
      if (bucket) {
        let current = bucket.head;
        while (current) {
          this.set(current.value.key, current.value.value);
          current = current.nextNode;
        }
      }
    }
  }

  get(key) {
    let index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) {
      console.log(`No bucket found for key: ${key}`);
      return null;
    }

    const node = bucket.find((node) => node.key === key);

    if (node) {
      console.log(`Found key: ${key}, value: ${node.value.value}`);
      return node.value.value;
    } else {
      console.log(`Key not found: ${key}`);
      return null;
    }
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
    const index = this.hash(key);
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
    this.loadFactor = this.loadFactor;
    this.capacity = 16;
    this.buckets = Array(this.capacity).fill(null);
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
