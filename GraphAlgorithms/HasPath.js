/** @format */

//Implementation using DFT
const hasPath_DFT = (graph, source, destination) => {
  const stack = [source]
  while (stack.length > 0) {
    const current = stack.pop()
    if (current === destination) return true

    graph[current].forEach((neighbor) => stack.push(neighbor))
  }
  return false
}

//Implementation using BFT
const hasPath_BFT = (graph, source, destination) => {
  const queue = [source]
  while (queue.length > 0) {
    const current = queue.shift()
    if (current === destination) return true

    graph[current].forEach((neighbor) => queue.push(neighbor))
  }
  return false
}

//Implementation using Recursion
const hasPath_Recursion = (graph, source, destination) => {
  if (source === destination) return true
  for (let neighbor of graph[source]) {
    if (hasPath_Recursion(graph, neighbor, destination)) return true
  }
  return false
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
}

console.log(hasPath_DFT(graph, 'j', 'j'))
console.log(hasPath_BFT(graph, 'f', 'f'))
console.log(hasPath_Recursion(graph, 'k', 'h'))
