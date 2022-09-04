/**
 * /* Priority Queue
 *
 * @format
 */

const PriorityQueue = function () {
  //variable collection will hold the set
  const collection = [];
  const capacity = null;

  //this method will display the queue
  this.print = () => {
    console.log(collection.map((x) => x.item));
  };

  //this method will output the size of the Queue
  this.size = () => {
    return collection.length;
  };

  //this method will output if the queue is empty
  this.isEmpty = () => {
    return collection.length === 0;
  };

  //This method will add an element to the back of the Queue
  this.enqueue = (item, priority = 0) => {
    priority = Math.max(Number(priority), 0);
    const element = { item, priority };

    if (
      this.isEmpty() ||
      element.priority >= collection[collection.length - 1].priority
    ) {
      collection.push(element);
    } else {
      for (let index in collection) {
        if (element.priority < collection[index].priority) {
          collection.splice(index, 0, element);
          break;
        }
      }
    }

    return this.size();
  };

  //this method will take out the element with the highest priority from the Priority Queue
  this.dequeue = () => {
    return collection.shift();
  };

  //this method will output if the queue is full
  this.isFull = () => {
    return this.capacity !== null && collection.length === this.capacity;
  };

  //this method will display the first element of the Priority Queue
  this.peek = () => {
    const element = collection[0].item;
    return element;
  };
};

const pq = new PriorityQueue();

pq.enqueue(12);
pq.enqueue(24, 3);
pq.enqueue(20, 2);
pq.enqueue(45, 3);

console.log(pq.dequeue());
pq.print();
