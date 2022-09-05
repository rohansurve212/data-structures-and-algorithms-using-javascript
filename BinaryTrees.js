/** @format */

const Node = function (val) {
  this.val = val
  this.left = null
  this.right = null
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

// version 1 - Implementing Binary Trees using Stack
// const depthFirstValues = (root) => {
//   if (root === null) return []
//   const result = []
//   const stack = [root]
//   while (stack.length > 0) {
//     const current = stack.pop()
//     result.push(current.val)

//     current.right && stack.push(current.right)
//     current.left && stack.push(current.left)
//   }
//   return result
// }

// console.log(depthFirstValues(a))

// Version 2 - Implementing Binary Trees using Recursion
const depthFirstValues = (root) => {
  //Base case
  if (root === null) return []
  const leftValues = depthFirstValues(root.left)
  const rightValues = depthFirstValues(root.right)
  return [root.val, ...leftValues, ...rightValues]
}

console.log(depthFirstValues(a))
