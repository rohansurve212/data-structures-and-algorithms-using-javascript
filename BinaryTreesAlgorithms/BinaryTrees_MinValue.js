/** @format */

const Node = function (val) {
  this.val = val
  this.left = null
  this.right = null
}

const a = new Node(-5)
const b = new Node(11)
const c = new Node(3)
const d = new Node(-44)
const e = new Node(15)
const f = new Node(-12)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//Implementation using BFT
// const BT_Min_BFT = (root) => {
//   if (root === null) return null
//   let min = root.val
//   const queue = [root]
//   while (queue.length > 0) {
//     const current = queue.shift()
//     if (current.val < min) {
//       min = current.val
//     }
//     current.left && queue.push(current.left)
//     current.right && queue.push(current.right)
//   }
//   return min
// }

// console.log(BT_Min_BFT(a))

//Implementation using DFT
// const BT_Min_DFT = (root) => {
//   if (root === null) return null
//   let min = root.val
//   const stack = [root]
//   while (stack.length > 0) {
//     const current = stack.pop()
//     if (current.val < min) {
//       min = current.val
//     }
//     current.right && stack.push(current.right)
//     current.left && stack.push(current.left)
//   }
//   return min
// }

// console.log(BT_Min_DFT(a))

//Implementation using Recursion
const BT_Min_Recursion = (root) => {
  if (root === null) return Infinity
  if (root.left === null && root.right === null) return root.val
  const leftMin = BT_Min_Recursion(root.left)
  const rightMin = BT_Min_Recursion(root.right)
  if (leftMin < root.val && leftMin < rightMin) return leftMin
  if (rightMin < root.val && rightMin < leftMin) return rightMin
  return root.val
}

console.log(BT_Min_Recursion(a))
