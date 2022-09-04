/** @format */
const hashStringToInt = (str, tableSize) => {
  let hash = 17
  for (let i = 0; i < str.length; i++) {
    hash = (13 * hash * str.charCodeAt(i)) % tableSize
  }
  return hash
}

const HashTable = function () {
  this.table = new Array(11)
  this.numItems = 0

  this.resize = () => {
    const newTable = new Array(this.table.length * 2)
    this.table.forEach((item) => {
      if (item) {
        item.forEach((key, value) => {
          const idx = hashStringToInt(key, newTable.length)
          if (newTable[idx]) {
            newTable[idx].push([key, value])
          } else {
            newTable[idx] = [[key, value]]
          }
        })
      }
    })
    this.table = newTable
  }

  this.setItem = (key, value) => {
    this.numItems++
    const loadFactor = this.numItems / this.table.length
    if (loadFactor > 0.8) {
      this.resize()
    }
    const idx = hashStringToInt(key, this.table.length)
    if (this.table[idx]) {
      this.table[idx].push([key, value])
    } else {
      this.table[idx] = [[key, value]]
    }
  }

  this.getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length)

    if (!this.table[idx]) {
      return null
    } else {
      return this.table[idx].find((x) => x[0] === key)[1]
    }
  }
}

const myHashTable = new HashTable()
myHashTable.setItem('firstName', 'Rohan')
myHashTable.setItem('lastName', 'Surve')
myHashTable.setItem('age', 33)
myHashTable.setItem('dob', '2/12/1988')
myHashTable.setItem('height', 176)
myHashTable.setItem('weight', '150 lbs')
console.log(myHashTable.getItem('firstName'))
console.log(myHashTable.getItem('lastName'))
console.log(myHashTable.getItem('age'))
console.log(myHashTable.getItem('dob'))
console.log(myHashTable.getItem('height'))
console.log(myHashTable.getItem('weight'))
console.log(myHashTable.table.length)
