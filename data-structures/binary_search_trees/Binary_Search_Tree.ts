// import Node from "./Node";

class Node {
	public value: any;
	public left: Node;
	public right: Node;
	public count: number;

	constructor(value: any) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.count = 0;
	}
}

export default class BinarySearchTree {
	public root: Node;
	constructor(data?: any[]) {
		this.root = null;
		/**
		 * If there is any data input to the binary search tree
		 * constructor, then we should loop through each item in
		 * the array and insert it into the correct place with the
		 * insert method.
		 */
		if (data) data.forEach(item => this.insert(item));
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
			while (true) {
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
			while (true) {
				/**
				 * If the value of the current node is equal to the value input into the
				 * method, then the current node should be returned.
				 */
				if (current.value === value) return current;
				if (!current.right) {
					return null;
				} else if (current.value < value) {
					/**
					 * If the value of the current node is smaller than the value input into
					 * the method, then we need to check if it has a current.right. If it does,
					 * then we need to change current to be current.right so we can continue
					 * traversing through the tree; if it doesn't, then the node is not in the
					 * binary search tree, so we need to return null
					 */
					current = current.right;
				} else {
					/**
					 * If the value of the current node is larger than the value input into
					 * the method, then we need to check if it has a current.left. If it does,
					 * then we need to change current to be current.left so we can continue
					 * traversing through the tree; if it doesn't, then the node is not in the
					 * binary search tree, so we need to return null.
					 */
					if (!current.left) return null;
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
			while (true) {
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
	 * Breadth-First Searching is a method to traverse through the
	 * binary search tree, looking at all of the nodes in it at
	 * least once, and returning those nodes' values in one array.
	 */
	public breadthFirstSearching(): string[] {
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

	public depthFirstSearching_preOrder(): string[] {
		const visited: string[] = [];
		const traverse = (node: Node): void => {
			visited.push(node.value);
			node.left && traverse(node.left);
			node.right && traverse(node.right);
		};
		traverse(this.root);
		console.log(visited);
		return visited;
	}

	public depthFirstSearching_postOrder(): string[] {
		const visited: string[] = [];
		const traverse = (node: Node): void => {
			node.left && traverse(node.left);
			node.right && traverse(node.right);
			visited.push(node.value);
		};
		traverse(this.root);
		console.log(visited);
		return visited;
	}

	public depthFirstSearching_inOrder(): string[] {
		const visited: string[] = [];
		const traverse = (node: Node): void => {
			if (node.left) {
				traverse(node.left);
			}
			visited.push(node.value);
			if (node.right) {
				traverse(node.right);
			}
		};
		traverse(this.root);
		console.log(visited);
		return visited;
	}
}

const tree = new BinarySearchTree([10, 6, 8, 3, 20, 15]);
/**
 *           10
 *        6      15
 *     3     8      20
 */

tree.breadthFirstSearching();
tree.depthFirstSearching_preOrder();
tree.depthFirstSearching_postOrder();
tree.depthFirstSearching_inOrder();
