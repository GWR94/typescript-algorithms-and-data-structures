import Node from "./Node";

/**
 * TODO
 * [ ] Check through all binary search tree comments and markdown.
 */

export default class BinarySearchTree {
  public root: Node;
  public constructor(data?: any[]) {
    this.root = null;
    /**
     * If there is any data input to the binary search tree
     * constructor, then we should loop through each item in
     * the array and insert it into the correct place with the
     * insert method.
     */
    if (data) data.forEach((item): BinarySearchTree => this.insert(item));
  }

  /**
   * Method to insert a value into the binary search tree into the
   * correct place.
   * @param value: The value which a new node will be created with
   */
  public insert(value: any): BinarySearchTree {
    /**
     * First the node must be created, so it can later be added
     * to the binary search tree. The current let should also be
     * created so we can see the current root, and change this while
     * looping later.
     */
    const node = new Node(value);
    /**
     * If there is no current (root) for the binary search tree,
     * then there are obviously no values in the tree, so the
     * node value should be set to be current, one should be added
     * to currents count, and the whole binary search tree should
     * be returned.
     */
    let current: Node = this.root;
    if (!current) {
      node.count++;
      this.root = node;
      return this;
    } else {
      /**
       * If there is value in current, then there are values in the
       * binary search tree, so we should begin traversing through
       * the binary search tree.
       */
      while (current) {
        /**
         * If the value from the current node is smaller than the value
         * input into the method, we need to continue checking this value.
         */
        if (current.value < value) {
          /**
           * If there is a current.right value, we need to move the
           * current value to be current.right, and restart the loop
           * with current as current.right.
           */
          if (current.right) current = current.right;
          /**
           * If there is no current.right value, then the node created
           * at the start has to be the current.right value. We should
           * also increment current.right's count by 1 and return the
           * whole binary tree.
           */ else {
            current.right = node;
            current.right.count++;
            return this;
          }
          /**
           * If the value is larger than the current node, we need to
           * continue checking the value further.
           */
        } else if (current.value > value) {
          /**
           * If there is no current.right value, we need to move the current
           * value to be current.right, and restart the loop with current as
           * current.left.
           */
          if (current.left) current = current.left;
          /**
           * If there is no current.left value, then the node created at the
           * start has to be the current.right value. We should also increment
           * the current.right's count by 1, and return the whole binary search
           * tree.
           */ else {
            current.left = node;
            current.left.count++;
            return this;
          }
        } else {
          /**
           * If the value is the same as something that is already in the binary
           * search tree, then we need to add one to currents count, and then
           * return the whole binary search tree.
           */
          current.count++;
          return this;
        }
      }
    }
  }

  /**
   * Method to check if there is a node in the binary search tree which matches the
   * value input as a parameter. If there is, it should return that node, if it isn't
   * then it should return null;
   * @param value - The name of the value which we are aiming to find in the binary
   * search tree.
   */
  public find(value: any): Node {
    /**
     * If there is no root in the binary search tree, then there are no values to
     * find, so we should return null.
     */
    if (!this.root) return null;
    /**
     * If there is a root value, then there are values which we need to loop
     * through and check. We should also create a variable to store the current
     * node in, so we can change it while traversing through the binary search
     * tree.
     */ else {
      let current: Node = this.root;
      while (current) {
        /**
         * If the value of the current node is equal to the value input into the
         * method, then the current node should be returned.
         */
        if (current.value === value) return current;
        if (current.value < value) {
          /**
           * If the value of the current node is smaller than the value input into
           * the method, then we need to check if it has a current.right. If it does,
           * then we need to change current to be current.right so we can continue
           * traversing through the tree; if it doesn't, then the node is not in the
           * binary search tree, so we need to return null
           */
          if (!current.right) {
            return null;
          }
          current = current.right;
        } else {
          /**
           * If the value of the current node is larger than the value input into
           * the method, then we need to check if it has a current.left. If it does,
           * then we need to change current to be current.left so we can continue
           * traversing through the tree; if it doesn't, then the node is not in the
           * binary search tree, so we need to return null.
           */
          if (!current.left) {
            return null;
          }
          current = current.left;
        }
      }
    }
  }

  /**
   * Method which checks to there is a node with the binary search tree matching the value input
   * as a parameter. If it is, then it should return true, if it isn't then it should return false.
   * @param value - The name of the value which we are aiming to find in the binary search tree.
   * The method works in the exact same way as find(), except it returns a boolean value rather
   * than a node or null.
   */
  public contains(value: any): boolean {
    if (!this.root) return false;
    else {
      let current: Node = this.root;
      while (current) {
        if (current.value === value) return true;
        else if (current.value < value) {
          if (!current.right) return false;
          current = current.right;
        } else {
          if (!current.left) return false;
          current = current.left;
        }
      }
    }
  }

  /**
   * A breadth-first Searching method to traverse through the
   * binary search tree, looking at all of the nodes in it at
   * least once, and returning those nodes' values in one array.
   */
  public breadthFirstSearch(): string[] {
    /**
     * To store the visited nodes, you need to create two queues,
     * One called queue, which stores the elements which are waiting
     * to be looked at, and the other called visited, which contains
     * all of the nodes which have been visited so far in the method.
     * which can easily be implemented by using arrays with push and
     * shift methods.
     */
    const queue: Node[] = [];
    const visited: string[] = [];
    let node: Node = this.root;
    /**
     * Push the root element to the queue to so it can be used as the
     * first node to check in the loop.
     */
    queue.push(node);
    /**
     * While there is at least one node waiting in the queue, continue
     * the loop
     */
    while (queue.length) {
      /**
       * Take the result from shifting queue (the first element in
       * the array) and store it in the node let, then push nodes value
       * to the visited array. queue.shift() also removes the first node
       * from the queue array.
       */
      node = queue.shift();
      visited.push(node.value);
      /**
       * If there is a node to the left of the current node, add it to
       * the end of the queue.
       */
      if (node.left) queue.push(node.left);
      /**
       * If there is a node to the right of the current node, add it to
       * the end of the queue.
       */
      if (node.right) queue.push(node.right);
    }
    console.log(visited);
    return visited;
  }

  /**
   * A depth-first searching method using the pre-order technique
   * to traverse through the binary search tree, looking at all of
   * the nodes in it at least once, and returning those nodes'
   * values in one array.
   */
  public depthFirstSearchPreOrder(): string[] {
    /**
     * Create a string array to place all of the visited nodes'
     * values
     */
    const visited: string[] = [];
    /**
     * Traverse is a helper function to recursively go through all
     * of the nodes in the binary tree to check for left and right
     * values from that node, and to push the current nodes value
     * in the visited array before the nodes' left and right have
     * been traversed.
     * @param node - the node which is currently being traversed
     * to check for left & right values.
     */
    const traverse = (node: Node): void => {
      /**
       * Push the current nodes value into the visited array.
       */
      visited.push(node.value);
      /**
       * If there are right or left properties on the current
       * node, then traverse need to be recursively called to
       * push these nodes' value into the visited array, and
       * to check if that node has left & right properties to
       * recursively check.
       */
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    /**
     * Run traverse on the root element so it can begin recursively
     * going through all of the elements, then return the visited
     * array after all of the nodes have been checked.
     */
    traverse(this.root);
    console.log(visited);
    return visited;
  }

  /**
   * A depth-first searching method using the post-order technique
   * to traverse through the binary search tree, looking at all of
   * the nodes in it at least once, and returning those nodes'
   * values in one array.
   */
  public depthFirstSearchPostOrder(): string[] {
    /**
     * Create a string array to place all of the visited nodes'
     * values
     */
    const visited: string[] = [];
    /**
     * Traverse is a helper function to recursively go through all
     * of the nodes in the binary tree to check for left and right
     * values from that node, and to push the current nodes value
     * in the visited array, after both the nodes' left and right
     * have been traversed.
     * @param node - the node which is currently being traversed
     * to check for left & right values.
     */
    const traverse = (node: Node): void => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };
    /**
     * Run traverse on the root element so it can begin recursively
     * going through all of the elements, then return the visited
     * array after all of the nodes have been checked.
     */
    traverse(this.root);
    console.log(visited);
    return visited;
  }

  /**
   * A depth-first searching method using the in-order technique
   * to traverse through the binary search tree, looking at all of
   * the nodes in it at least once, and returning those nodes'
   * values in one array. All of the items in the array will be
   * sorted.
   */
  public depthFirstSearchInOrder(): string[] {
    /**
     * Push the current nodes value into the visited array.
     */
    const visited: string[] = [];
    /**
     * Traverse is a helper function to recursively go through all
     * of the nodes in the binary tree to check for left and right
     * values from that node, and to push the value of the left nodes'
     * after all of there are no more left nodes', and pushes all of
     * the right nodes when there are no more right nodes' to the
     * current nodes value in the visited array.
     * @param node - the node which is currently being traversed
     * to check for left & right values.
     */
    const traverse = (node: Node): void => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };
    /**
     * Run traverse on the root element so it can begin recursively
     * going through all of the elements, then return the visited
     * array after all of the nodes have been checked.
     */
    traverse(this.root);
    console.log(visited);
    return visited;
  }

  public remove(value): BinarySearchTree {
    let current = this.root;
    const direction = current.value >= value ? "left" : "right";
    let prev;
    while (current && current.value !== value) {
      prev = current;
      current.value > value ? (current = current.left) : (current = current.right);
    }
    if (!current) return null;
    let swap = current;
    if (swap.left && swap.right) {
      if (value === this.root.value) {
        swap = swap.left;
      }
      if (direction === "left") {
        while (swap.right) {
          prev = swap;
          swap = swap.right;
        }
        current.value = swap.value;
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
    current.value = swap.value;

    return this;
  }
}

const tree = new BinarySearchTree([10, 6, 8, 3, 15, 20]);
/**
 *            10
 *        6       15
 *     3     8  -    20
 */

console.log(tree.root);

tree.breadthFirstSearch();
tree.depthFirstSearchPreOrder();
tree.depthFirstSearchPostOrder();
tree.depthFirstSearchInOrder();
