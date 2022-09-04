/** @format */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.header = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(data) {
    const n = new Node(data);
    if (this.size === 0) {
      this.header = n;
      this.tail = n;
    } else {
      n.next = this.header;
      this.header = n;
    }
    this.size++;
  }

  append(data) {
    const n = new Node(data);
    if (this.size === 0) {
      this.header = n;
      this.tail = n;
    } else {
      const temp = this.tail;
      this.tail = n;
      temp.next = this.tail;
    }
  }

  printList() {
    let data = "";
    let current = this.header;
    while (current !== null) {
      data = data + current.data + "";
      current = current.next;
    }
    return data;
  }

  removeFirst() {
    if (this.size === 0) {
      return null;
    }
    let data = this.header.data;
    if (this.size === 1) {
      this.header = null;
      this.tail = null;
    } else {
      this.header = this.header.next;
    }
    this.size--;
    return data;
  }

  removeLast() {
    if (this.size === 0) {
      return null;
    }
    let data = this.tail.data;
    if (this.size === 1) {
      this.header = null;
      this.tail = null;
    } else {
      let current = this.header;
      while (current.next != this.tail) {
        current = current.next;
      }
      this.tail = current;
      current.next = null;
    }
    this.size--;
    return data;
  }

  insertAt(pos, data) {
    if (pos < 0 || pos > this.size) {
      return;
    }
    if (pos === 0) {
      this.prepend(data);
    } else if (pos === this.size) {
      this.append(data);
    } else {
      const n = new Node(data);
      let counter = 0;
      let prev = null;
      let current = this.header;
      while (counter < pos) {
        prev = current;
        current = current.next;
        counter++;
      }
      prev.next = n;
      n.next = current;
      this.size++;
    }
  }

  removeAt(pos) {
    if (pos < 0 || pos >= this.size) {
      return null;
    }
    if (pos === 0) {
      return this.removeFirst();
    } else if (pos === this.size - 1) {
      return this.removeLast();
    } else {
      let counter = 0;
      let prev = null;
      let current = this.header;
      while (counter < pos) {
        prev = current;
        current = current.next;
        counter++;
      }
      prev.next = current.next;
      current.next = null;
      this.size--;
      return current.data;
    }
  }
}

let linkedlist = new LinkedList();
