/**
 * /* Circular Queue
 *
 * @format
 */

class CircularQueue {
  #collection;
  #capacity;
  #tail = -1;
  #head = -1;
  #size = 0;

  constructor(capacity) {
    this.#capacity = Math.max(Number(capacity), 0) || 10;
    this.#collection = Array(this.#capacity).fill(null);
  }

  get size() {
    return this.#size;
  }

  get isFull() {
    return this.size === this.#capacity;
  }

  get isEmpty() {
    return this.size === 0;
  }

  enqueue(item) {
    if (!this.isFull) {
      this.#tail = (this.#tail + 1) % this.#capacity;
      this.#collection[this.#tail] = item;
      this.#size += 1;

      if (this.#head === -1) {
        this.#head = this.#tail;
      }
    } else {
      console.log("Sorry, the queue is full!");
    }

    return this.#size;
  }

  dequeue() {
    let item = null;
    if (!this.isEmpty) {
      item = this.#collection[this.#head];
      this.#collection[this.#head] = null;
      this.#head = (this.#head + 1) % this.#capacity;
      this.#size -= 1;
    } else {
      console.log("Sorry, the queue is empty.");
    }

    if (!this.size) {
      this.#head = -1;
      this.#tail = -1;
    }

    return item;
  }

  peek() {
    return this.#collection[this.#head];
  }

  print() {
    console.log(this.#collection);
  }
}

const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);

cq.dequeue();
cq.dequeue();
cq.dequeue();
cq.dequeue();

cq.dequeue();

console.log(cq.isFull);
console.log(cq.isEmpty);

cq.enqueue(50);
cq.enqueue(60);
cq.enqueue(70);
cq.enqueue(80);
cq.enqueue(90);

console.log(cq.isFull);
console.log(cq.isEmpty);

console.log(cq.peek());

cq.enqueue(100);

cq.print();
