/** @format */

//Implementation using DFT
const depthFirstPrint = (graph, source) => {
  const stack = [source]
  const result = []
  if (graph[source] === []) return []
  while (stack.length > 0) {
    const current = stack.pop()
    result.push(current)

    graph[current].forEach((neighbor) => stack.push(neighbor))
  }
  return result
}

//Implementation using Recursion
const depthFirstPrint_Recursion = (graph, source) => {
  if (source === null) return null
  const neighbors = []
  for (let neighbor of graph[source]) {
    neighbors.push(...depthFirstPrint_Recursion(graph, neighbor))
  }
  return [source, ...neighbors]
}

//Implementation using BFT
const breadthFirstPrint = (graph, source) => {
  const queue = [source]
  const result = []
  if (graph[source] === []) return []
  while (queue.length > 0) {
    const current = queue.shift()
    result.push(current)

    graph[current].forEach((neighbor) => queue.push(neighbor))
  }
  return result
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

console.log(depthFirstPrint(graph, 'a'))
console.log(depthFirstPrint_Recursion(graph, 'a'))
console.log(breadthFirstPrint(graph, 'a'))
