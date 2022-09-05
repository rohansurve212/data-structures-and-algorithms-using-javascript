/** @format */

const Node = function (val) {
  this.val = val
  this.left = null
  this.right = null
}

const a = new Node(5)
const b = new Node(11)
const c = new Node(30)
const d = new Node(4)
const e = new Node(2)
const f = new Node(-16)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//Implementation using Recursion
const BT_MaxPathSum = (root) => {
  if (root === null) return -Infinity
  if (root.left === null && root.right === null) return root.val
  const leftMaxSum = BT_MaxPathSum(root.left)
  const rightMaxSum = BT_MaxPathSum(root.right)
  return root.val + Math.max(leftMaxSum, rightMaxSum)
}

console.log(BT_MaxPathSum(a))
