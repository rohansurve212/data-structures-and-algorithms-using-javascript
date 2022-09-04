/** @format */

class BinaryMaxHeap {
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

  removeMax() {
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
    let largest = index;
    if (
      this.hasLeftChild(index) &&
      this.leftChild(index) > this.storage[index]
    ) {
      largest = this.getLeftChildIndex(index);
    }
    if (
      this.hasRightChild(index) &&
      this.rightChild(index) > this.storage[index]
    ) {
      largest = this.getRightChildIndex(index);
    }
    if (largest != index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  insert(data) {
    this.storage[this.size] = data;
    this.size += 1;
    this.heapifyUp(this.size - 1);
  }

  heapifyUp(index) {
    if (this.hasParent(index) && this.parent(index) < this.storage[index]) {
      this.swap(index, this.getParentIndex(index));
      this.heapifyUp(this.getParentIndex(index));
    }
  }
}
