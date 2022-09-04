/**
 * /* Sets
 *
 * @format
 */

const mySet = function () {
  //variable collection will hold the set
  const collection = [];

  //this method will check for the presence of an element and return true or false
  this.has = (element) => {
    return collection.indexOf(element) !== -1;
  };

  //this method will return all the values in the Set
  this.values = () => {
    return collection;
  };

  //this method will add an element to the Set
  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //this method will remove an element from the Set
  this.remove = (element) => {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //this method will return the size of the Set
  this.size = () => {
    return collection.length;
  };

  //this method will return the union of two Sets
  this.union = (otherSet) => {
    const firstSet = [...this.values()];
    const secondSet = [...otherSet.values()];
    const unCommonSet = secondSet.filter((x) => !firstSet.includes(x));
    return [...firstSet, ...unCommonSet];
  };

  //this method will return the intersection of two Sets
  this.intersection = (otherSet) => {
    const firstSet = [...this.values()];
    const secondSet = [...otherSet.values()];
    const commonSet = secondSet.filter((x) => firstSet.includes(x));
    return [...commonSet];
  };

  //this method will return the difference of two Sets as a new set
  this.difference = (otherSet) => {
    const firstSet = [...this.values()];
    const secondSet = [...otherSet.values()];
    const differenceSet = [
      ...firstSet.filter((x) => !secondSet.includes(x)),
      ...secondSet.filter((x) => !firstSet.includes(x)),
    ];
    return differenceSet;
  };

  //this method will test if the set is a subset of a different Set
  this.isSubset = (otherSet) => {
    const firstSet = [...this.values()];
    const secondSet = [...otherSet.values()];
    return firstSet.every((x) => secondSet.includes(x));
  };
};

const setA = new mySet();
const setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.isSubset(setB));
console.log(setA.intersection(setB));
console.log(setB.difference(setA));
console.log(setA.union(setB));

const setC = new mySet();
const setD = new mySet();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.remove("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
