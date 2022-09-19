/** @format */

const Node = function (val) {
  this.val = val
  this.left = null
  this.right = null
}

const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(4)
const e = new Node(2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//Implementation using BFT
// const BT_Sum_BFT = (root) => {
//   if (root === null) return 0
//   let result = 0
//   const queue = [root]
//   while (queue.length > 0) {
//     const current = queue.shift()
//     result += current.val

//     current.left && queue.push(current.left)
//     current.right && queue.push(current.right)
//   }
//   return result
// }

// console.log(BT_Sum_BFT(a))

//Implementation using DFT and Stack
// const BT_Sum_DFT = (root) => {
//   if (root === null) return 0
//   let result = 0
//   const stack = [root]
//   while (stack.length > 0) {
//     const current = stack.pop()
//     result += current.val

//     current.right && stack.push(current.right)
//     current.left && stack.push(current.left)
//   }
//   return result
// }

// console.log(BT_Sum_DFT(a))

//Implementation using DFT and Recursion
const BT_Sum_Recursion = (root) => {
  if (root === null) return 0
  return root.val + BT_Sum_Recursion(root.left) + BT_Sum_Recursion(root.right)
}

console.log(BT_Sum_Recursion(a))
