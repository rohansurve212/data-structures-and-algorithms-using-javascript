/** @format */

// A Binary Heap is a Binary Tree with the following properties.
// Every parent node, at most, can have only two children.
// Must be a complete tree. It must be filled from left to right and every level must be full, with the exception of the last level not needing to be full.
// A Binary Heap is either Min Heap or Max Heap.
// In a Min Binary Heap, every parent's key must be smaller than its children nodes. This ensures that the root node has the smallest key within the heap.
// In a Max Binary Heap, every parent's key must be greater than its children nodes. This ensures that the root node has the largest key within the heap.

class MinHeap {
  constructor(capacity) {
    this.storage = [];
    this.size = 0;
    this.capacity = capacity;
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.storage[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.storage[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.storage[this.getParentIndex(index)];
  }

  isFull() {
    return this.size === this.capacity;
  }

  swap(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  removeMin() {
    if (this.size === 0) {
      throw new Error("Empty Heap");
    }
    let data = this.storage[0];
    this.storage[0] = this.storage[this.size - 1];
    this.size -= 1;
    this.heapifyDown(0);
    return data;
  }

  heapifyDown(index) {
    let smallest = index;
    if (
      this.hasLeftChild(index) &&
      this.leftChild(index) < this.storage[index]
    ) {
      smallest = this.getLeftChildIndex(index);
    }
    if (
      this.hasRightChild(index) &&
      this.rightChild(index) < this.storage[index]
    ) {
      smallest = this.getRightChildIndex(index);
    }
    if (smallest != index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  insert(data) {
    this.storage[this.size] = data;
    this.size += 1;
    this.heapifyUp(this.size - 1);
  }

  heapifyUp(index) {
    if (this.hasParent(index) && this.parent(index) > this.storage[index]) {
      this.swap(index, this.getParentIndex(index));
      this.heapifyUp(this.getParentIndex(index));
    }
  }
}
