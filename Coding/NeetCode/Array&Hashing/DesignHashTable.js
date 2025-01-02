class Pair {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

class HashTable {
  constructor(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.map = new Array(this.capacity).fill(null);
  }

  hash(key) {
    return key % this.capacity;
  }

  insert(key, value) {
    let index = this.hash(key);

    while (true) {
      if (this.map[index] === null) {
        this.map[index] = new Pair(key, value);
        this.size++;
        if (this.size >= this.capacity / 2) {
          this.resize();
        }
        return;
      } else if (this.map[index].key === key) {
        this.map[index].val = value; // Replace existing value
        return;
      }
      index = (index + 1) % this.capacity; // Linear probing
    }
  }

  get(key) {
    let index = this.hash(key);
    while (this.map[index] !== null) {
      if (this.map[index].key === key) {
        return this.map[index].val;
      }
      index = (index + 1) % this.capacity;
    }
    return -1;
  }

  remove(key) {
    let index = this.hash(key);

    while (this.map[index] !== null) {
      if (this.map[index].key === key) {
        this.map[index] = null; // Remove the key-value pair
        this.size--;

        // Rehash subsequent elements in the same cluster
        index = (index + 1) % this.capacity;
        while (this.map[index] !== null) {
          const { key: k, val: v } = this.map[index];
          this.map[index] = null; // Remove and reinsert to maintain cluster
          this.size--;
          this.insert(k, v);
          index = (index + 1) % this.capacity;
        }

        return true;
      }
      index = (index + 1) % this.capacity;
    }
    return false;
  }

  getSize() {
    return this.size;
  }

  getCapacity() {
    return this.capacity;
  }

  resize() {
    const oldMap = this.map;
    this.capacity *= 2;
    this.map = new Array(this.capacity).fill(null);
    this.size = 0; // Reset size and reinsert elements

    for (const pair of oldMap) {
      if (pair !== null) {
        this.insert(pair.key, pair.val);
      }
    }
  }
}

/*
Design a Hash Table class.

Your HashTable class should support the following operations:

HashTable(int capacity) will initialize an empty hash table with a capacity of capacity, where capacity > 1.
int get(int key) will return the value associated with the key. If the key is not present in the hash table, return -1.
void insert(int key, int value) will insert the key-value pair into the hash table. If the key is already present in the hash table, the original value should be replaced with the new value.
bool remove(int key) will remove the key-value pair with the given key. If the key is not present, return false, otherwise return true
int getSize() will return the number of keys in the hash table.
int getCapacity() will return the capacity of the hash table.
void resize() will double the capacity of the hash table. This method should be called automatically when the load factor reaches or exceeds 0.5. Your insert method should automatically call resize() when necessary.
Note: You can choose how to handle collisions.

Example 1:

Input:
["HashTable", 4, "insert", 1, 2, "get", 1, "insert", 1, 3, "get", 1, "remove", 1, "get", 1]

Output:
[null, null, 2, 3, true, -1]
Example 2:

Input:
["HashTable", 2, "getCapacity", insert, 6, 7, "getCapacity", "insert", 1, 2, "getCapacity", "insert", 3, 4, "getCapacity", "getSize"]

Output:
[null, 2, null, 4, null, 8, null, 8, 3]
*/
