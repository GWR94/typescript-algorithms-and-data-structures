class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(data) {
    this.root = null;
    data && data.forEach((num) => this.insert(num));
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (current) {
      if (current.val < val) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) {
        console.log(current);
        return current;
      }
      current.val > val ? (current = current.left) : (current = current.right);
    }
    console.log(null);
    return null;
  }

  contains(val) {
    if (this.find(val)) return true;
    return false;
  }

  remove(val) {
    let current = this.root;
    const direction = current.val >= val ? "left" : "right";
    let prev;
    while (current && current.val !== val) {
      prev = current;
      current.val > val ? (current = current.left) : (current = current.right);
    }
    if (!current) return null;
    let swap = current;
    if (swap.left && swap.right) {
      if (val === this.root.val) {
        swap = swap.left;
      }
      if (direction === "left") {
        while (swap.right) {
          prev = swap;
          swap = swap.right;
        }
        current.val = swap.val;
        swap.left ? (prev.right = swap.left) : (prev.right = null);
      } else {
        while (swap.left) {
          prev = swap;
          swap = swap.left;
        }
        swap.right ? (prev.left = swap.right) : (prev.left = null);
      }
    } else if (swap.left) {
      prev.left = swap.left;
    } else if (swap.right) {
      prev.right = swap.right;
    } else {
      prev.left ? (prev.left = null) : (prev.right = null);
    }
    current.val = swap.val;

    return this;
  }
}

const tree = new BinarySearchTree([
  10,
  5,
  3,
  7,
  6,
  8,
  6.5,
  9,
  7.5,
  8.5,
  2,
  4,
  1,
  2.5,
  12,
  11,
  15,
  18,
  20,
]);
tree.remove(12);
console.log(tree.root.right);
