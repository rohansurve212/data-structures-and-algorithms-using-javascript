/** @format */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // Insert data under a node
  insert(data) {
    if (this.data === data) {
      throw new Error("Data already exists within the tree.");
    } else if (this.data > data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = new Node(data);
      }
    } else {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = new Node(data);
      }
    }
  }

  // Delete data from under a node
  delete(data) {
    if (data < this.data && this.left) {
      this.left = this.left.delete(data);
    } else if (data > this.data && this.right) {
      this.right = this.right.delete(data);
    } else {
      if (this.data === data) {
        if (this.right && this.left) {
          let minVal = this.right.findMin();
          this.data = minVal;
          this.right = this.right.delete(minVal);
        } else if (this.left) {
          return this.left;
        } else if (this.right) {
          return this.right;
        } else {
          return null;
        }
      }
    }
    return this;
  }

  // Find data with minimum value from under a node
  findMin() {
    if (this.left) {
      return this.left.findMin();
    } else {
      return this.data;
    }
  }

  // Find data if available from under a node
  find(data) {
    if (data === this.data) {
      return true;
    } else if (data < this.data && this.left != null) {
      return this.left.find(data);
    } else if (data > this.data && this.right != null) {
      return this.right.find(data);
    }
    return false;
  }

  // Inorder Traversal under a node
  inorder(currentNode) {
    if (currentNode) {
      this.inorder(currentNode.left);
      console.log(currentNode.data);
      this.inorder(currentNode.right);
    }
  }

  // Preorder Traversal under a node
  preorder(currentNode) {
    if (currentNode) {
      console.log(currentNode.data);
      this.preorder(currentNode.left);
      this.preorder(currentNode.right);
    }
  }

  // Postorder Traversal under a node
  postorder(currentNode) {
    if (currentNode) {
      this.postorder(currentNode.left);
      this.postorder(currentNode.right);
      console.log(currentNode.data);
    }
  }

  // Find Height from this node
  findHeight(currentNode) {
    if (currentNode === null) {
      return -1;
    }
    let leftHeight = this.findHeight(currentNode.left);
    let rightHeight = this.findHeight(currentNode.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Insert data within a Binary Search Tree
  insert(data) {
    if (this.root) {
      this.root.insert(data);
    } else {
      this.root = new Node(data);
    }
  }

  // Delete data from within a Binary Search Tree
  delete(data) {
    if (this.root) {
      this.root = this.root.delete(data);
    } else {
      throw new Error("Data does not exist within the tree.");
    }
  }

  // Find data from within a Binary Search Tree
  find(data) {
    if (this.root) {
      return this.root.find(data);
    }
    return false;
  }

  // Inorder Traversal within a Binary Search Tree
  inorder() {
    if (this.root) {
      this.root.inorder(this.root);
    }
  }

  // Preorder Traversal within a Binary Search Tree
  preorder() {
    if (this.root) {
      this.root.preorder(this.root);
    }
  }

  // Postorder Traversal within a Binary Search Tree
  postorder() {
    if (this.root) {
      this.root.postorder(this.root);
    }
  }

  // Height of a Binary Search Tree
  findHeight() {
    if (this.root) {
      return this.root.findHeight(this.root);
    }
    return -1;
  }
}
