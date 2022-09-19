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

// Version 1 - Implementing Binary Trees using Queue
const breadthFirstValues = (root) => {
  if (root === null) return []
  const result = []
  const queue = [root]
  while (queue.length > 0) {
    const current = queue.shift()
    result.push(current.val)

    current.left && queue.push(current.left)
    current.right && queue.push(current.right)
  }

  return result
}

console.log(breadthFirstValues(a))
