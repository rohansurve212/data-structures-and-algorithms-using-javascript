/** @format */

const Dictionary = function () {
  this.datastore = new Array()

  this.add = (key, value) => {
    this.datastore[key] = value
  }

  this.find = (key) => {
    return this.datastore[key]
  }

  this.remove = (key) => {
    delete this.datastore[key]
  }

  this.showAll = () => {
    for (key of Object.keys(this.datastore).sort()) {
      console.log(`${key} -> ${this.datastore[key]}`)
    }
  }

  this.count = () => {
    let n = 0
    for (key of Object.keys(this.datastore)) {
      ++n
    }
    return n
  }

  this.clear = () => {
    for (key of Object.keys(this.datastore)) {
      delete this.datastore[key]
    }
  }
}

// let pbook = new Dictionary()

// pbook.add('Raymond', '123')
// pbook.add('David', '345')
// pbook.add('Cynthia', '456')
// pbook.add('Mike', '723')
// pbook.add('Jennifer', '987')
// pbook.add('Danny', '012')
// pbook.add('Jonathan', '666')
// pbook.showAll()

//------------------------------------------------------------------------------------------------

// Exercise # 1
const fs = require('fs')
const readline = require('readline')

const processLineByLine = async (fileName) => {
  const fileStream = fs.createReadStream(fileName)
  const outputArray = []
  const phoneBook = []
  const phoneDiary = {}

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  for await (const line of rl) {
    outputArray.push(line)
  }

  phoneBook['names'] = outputArray[0].split(';')
  phoneBook['phoneNumbers'] = outputArray[1].split(';')

  for (let i = 0; i < phoneBook['names'].length; i++) {
    phoneDiary[phoneBook['names'][i]] = phoneBook['phoneNumbers'][i]
  }

  console.log(phoneDiary)
}

processLineByLine('input.txt')

//-------------------------------------------------------------------------

// Exercise # 2
const wordOccurrences = (inputString) => {
  const stringArray = inputString.split(' ')
  console.log(stringArray)
  const counter = {}

  for (const word of stringArray) {
    if (counter[word]) {
      counter[word] += 1
    } else {
      counter[word] = 1
    }
  }

  return counter
}

console.log(wordOccurrences('the brown fox jumped over the blue fox'))

//---------------------------------------------------------------------------

// Exercise # 3
const wordOccurrences2 = (inputString) => {
  const stringArray = inputString.split(' ')
  console.log(stringArray)
  const counter = {}

  for (const word of stringArray.sort()) {
    if (counter[word]) {
      counter[word] += 1
    } else {
      counter[word] = 1
    }
  }

  return counter
}

console.log(wordOccurrences2('the brown fox jumped over the blue fox'))
