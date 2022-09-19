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

// Implementing BinaryTrees_Includes problem using BFT
const BT_Includes_BFS = (root, target) => {
  if (root === null) return false
  if (root.val === target) return true
  const queue = [root]
  while (queue.length > 0) {
    const current = queue.shift()
    if (current.val === target) return true

    current.left && queue.push(current.left)
    current.right && queue.push(current.right)
  }
  return false
}

// Implementing BinaryTrees_Includes problem using DFT and Stack
const BT_Includes_DFS = (root, target) => {
  if (root === null) return false
  if (root.val === target) return true
  const stack = [root]
  while (stack.length > 0) {
    const current = stack.pop()
    if (current.val === target) return true

    current.right && stack.push(current.right)
    current.left && stack.push(current.left)
  }
  return false
}

// Implementing BinaryTrees_Includes problem using DFT and Recursion
const BT_Includes_DFS_Recursion = (root, target) => {
  if (root === null) return false
  if (root.val === target) return true
  return (
    BT_Includes_DFS_Recursion(root.left, target) ||
    BT_Includes_DFS_Recursion(root.right, target)
  )
}

console.log(BT_Includes_DFS_Recursion(a, 'f'))
