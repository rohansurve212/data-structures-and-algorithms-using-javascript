/** @format */
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const HashTable = function () {
  this.table = new Array(137)
  // this.get = get

  this.buildChains = () => {
    for (let i = 0; i < this.table.length; ++i) {
      this.table[i] = new Array()
    }
  }

  this.simpleHash = (data) => {
    let total = 0
    for (let i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i)
    }
    console.log(`Hash value: ${data} -> ${total}`)
    return total % this.table.length
  }

  this.put = (key, data) => {
    let pos = this.betterHash(key)
    let index = 0
    if (this.table[pos][index] === undefined) {
      this.table[pos][index + 1] = data
    } else {
      while (this.table[pos][index] !== undefined) {
        ++index
      }
      this.table[pos][index] = data
    }
    ++index
  }

  this.showDistro = () => {
    let n = 0
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i][0] != undefined) {
        console.log(`${i} : ${this.table[i]}`)
      }
    }
  }

  this.betterHash = (string) => {
    const H = 37
    let total = 0
    for (let i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i)
    }
    total = total % this.table.length
    if (total < 0) {
      total += this.table.length - 1
    }
    return parseInt(total)
  }
}

let someNames = [
  'David',
  'Jennifer',
  'Rohan',
  'Donnie',
  'Raymond',
  'Cynthia',
  'Mike',
  'Clayton',
  'Danny',
  'Jonathan',
]

let hTable = new HashTable()
hTable.buildChains()
for (let i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i])
}

hTable.showDistro()

//----------------------------------------------------------------------------------

// let pnumbers = new HashTable()
// let nam, number
// for (let i = 0; i < 3; i++) {
//   console.log('Enter a name (space to quit): ')
//   nam = readline()
//   console.log('Enter a number: ')
//   number = readline()
// }
// nam = ''
// console.log('Name for number (Enter quit to stop): ')
// while (nam != 'quit') {
//   nam = readline()
//   if (nam === 'quit') {
//     break
//   }
//   console.log(`${nam}'s number is ${pnumbers.get(nam)}`)
//   console.log('Name for number (Enter quit to stop): ')
// }
