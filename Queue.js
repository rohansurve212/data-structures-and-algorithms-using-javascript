/**
 * /* Queue
 *
 * @format
 */

const Queue = function () {
  //variable collection will hold the set
  const collection = [];

  //this method will display the queue
  this.print = () => {
    console.log(collection);
  };

  //This method will add an element to the back of the Queue
  this.enqueue = (element) => {
    collection.push(element);
  };

  //this method will take out an element from the front of the Queue
  this.dequeue = () => {
    return collection.shift();
  };

  //this method will output the first element in the Queue
  this.front = () => {
    return collection[0];
  };

  //this method will output the size of the Queue
  this.size = () => {
    return collection.length;
  };

  //this method will output if the queue is empty
  this.isEmpty = () => {
    return collection.length === 0;
  };

  //this method will display the first element of the Queue
  this.peek = () => {
    return collection[0];
  };
};

const q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();
