import Node from "./Node";
export default class PriorityQueue {
	private values: Node[];
	constructor(data?: Node[]) {
		this.values = [];
		/**
		 * If any values are passed in as a parameter,
		 * execute the enqueue method on each of the
		 * elements
		 */
		if (data) data.forEach(node => this.enqueue(node.value, node.priority));
	}

	/**
	 * Method to insert a value into the priority queue. It moves
	 * the node with the highest priority up the top of queue.
	 * @param value - the value to insert into the priority queue.
	 * @param priority - the priority which the priority queue will
	 * sort the node in. The lower the number is, the higher priority
	 * it is.
	 */
	public enqueue = (value: any, priority: number): void => {
		/**
		 * Create a new node based on the input value and priority
		 * parameters.
		 */
		const node = new Node(value, priority);
		/**
		 * Push the node to the end of the array, and then
		 * use the bubble up method to move the value up
		 * the priority queue into its correct spot based on
		 * the nodes' priority.
		 */
		this.values.push(node);
		this.bubbleUp();
	};

	/**
	 * Method to remove the node with the top priority in
	 * the priority queue, and rearrange all elements so its a
	 * valid priority queue once more.
	 */
	public dequeue = (): Node => {
		/**
		 * Pop the last node from the end of the values array, and
		 * save it in a constant for swapping the value if necessary.
		 * Store the min node in a constant to return as the node
		 * which is being returned from the method.
		 */
		const min = this.values[0];
		const end = this.values.pop();
		/**
		 * If the length of the values array is larger than 0 after
		 * popping the last node, then set the first node in the values
		 * array to be the end node.
		 */
		if (this.values.length > 0) {
			this.values[0] = end;
			/**
			 * Execute the sinkDown method to move the previous
			 * end (now first) node to it's correct spot.
			 */
			this.sinkDown();
		}
		/**
		 * Return the min node as this is what was removed from the
		 * priority queue.
		 */
		return min;
	};

	/**
	 * Method to print out the values of the priority queue.
	 */
	public printQueue = (): void => {
		return console.log(this.values, "length", this.values.length);
	};

	/**
	 * Method to swap the two values in the values array
	 * @param idx1 - the index of the first value to swap
	 * @param idx2 - the index of the second value to swap
	 */
	protected swap = (idx1: number, idx2: number): void => {
		const arr = this.values;
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	/**
	 * Method to sort the priority queue once a node has
	 * been added to the end, as it's more than likely not in
	 * its correct spot.
	 */
	private bubbleUp = (): void => {
		/**
		 * Create a let to store the index which the node that
		 * was pushed into the array (the last node in the
		 * values array), and create a constant for the value of
		 * that index so it can be compared later.
		 */
		let idx = this.values.length - 1;
		const node = this.values[idx];
		/**
		 * Loop through the priority queue while the index is valid
		 * (above 0).
		 */
		while (idx > 0) {
			/**
			 * Find the parent index of the current idx ((n-1)/2),
			 * store it in a constant and save the node found in
			 * that index in the parent constant.
			 */
			const parentIdx: number = Math.floor((idx - 1) / 2);
			const parent: Node = this.values[parentIdx];
			/**
			 * If the elements priority is equal to or larger than
			 * its parent, then break the loop as its already in its
			 * correct spot.
			 */
			if (node.priority >= parent.priority) break;
			/**
			 * If the elements priority is smaller than its parents
			 * priority, then it needs to be swapped (using the swap
			 * method). The idx variable also needs to be set to be
			 * parentIdx because that is where the node will now
			 * be in the priority queue. Keep looping until the value
			 * is in its correct spot.
			 */
			this.swap(idx, parentIdx);
			idx = parentIdx;
		}
	};

	/**
	 * Method to move the node down the priority queue after the remove
	 * method has moved the last node to the root, because that node will
	 * probably be incorrectly placed for as its priority is unlikely the
	 * have it set in the correct place.
	 */
	private sinkDown = (): void => {
		/**
		 * Create a let to store the current index, and set it to 0;
		 * then set the node constant to be the value from idx
		 * because the first node in the values array is the current
		 * variable that needs to be compared to others.
		 */
		let idx: number = 0;
		const node: Node = this.values[0];
		/**
		 * Store the length of the values array so it can be used to check
		 * for a valid index in the while loop.
		 */
		const length: number = this.values.length;
		while (true) {
			/**
			 * Save the index of the left and right child of the current index
			 * in constants, and create two lets to store the value of these
			 * children later (if they are valid indexes).
			 */
			const leftIdx = 2 * idx + 1;
			const rightIdx = 2 * idx + 2;
			let leftChild: Node, rightChild: Node;
			/**
			 * Create a swap variable and initialise it to be null, so it can
			 * later be set to the left or right child to swap at the end of the
			 * loop if necessary.
			 */
			let swap = null;
			/**
			 * If the index of the left child is less than the length, then it is
			 * a valid node, so leftChild can be set to be the left child's index.
			 * If leftChild is larger than the current node, then it needs to
			 * be swapped, so set the swap variable to be leftIdx.
			 */
			if (leftIdx < length) {
				leftChild = this.values[leftIdx];
				if (leftChild.priority < node.priority) {
					swap = leftIdx;
				}
			}
			/**
			 * If index of the right child is less than the length, then it is a
			 * valid value, so rightChild can be set to the right child's index.
			 */
			if (rightIdx < length) {
				rightChild = this.values[rightIdx];
				/**
				 * If no swap has been made in the previous if statement (swap is
				 * null) and the right child's priority is larger than the node's
				 * priority, then swap needs to be set to the right child's index.
				 * If there was a swap in the previous if statement (swap is not
				 * null) and the right child's priority is larger than the left
				 * child's priority, swap should be set to be the right child's
				 * index as you should swap the larger node.
				 */
				if (
					(swap === null && rightChild.priority < node.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightIdx;
				}
			}
			/**
			 * If there was no changes to the swap variable, then you need to break
			 * out of the loop because the element is in the right place.
			 */
			if (swap === null) break;
			/**
			 * If the previous if statement hasn't broken out of the loop, then a swap
			 * needs to occur - using the swap method. The idx variable needs to be set
			 * to be swap so the loop can be continued from that index.
			 */
			this.swap(swap, idx);
			idx = swap;
		}
	};
}

const queue = new PriorityQueue([
	{
		value: "Not Important",
		priority: 4
	},
	{
		value: "Important",
		priority: 1
	},
	{
		value: "Pretty Important",
		priority: 2
	},
	{
		value: "Important",
		priority: 1
	},
	{
		value: "Incredibly Important",
		priority: 0
	},
	{
		value: "Incredibly Important",
		priority: 0
	},
	{
		value: "Incredibly Important",
		priority: 0
	},
	{
		value: "Important",
		priority: 1
	}
]);
queue.printQueue();
/**
 *            0
 *         1     0
 *       1  1  2   0
 *     4
 */
queue.dequeue();
queue.printQueue();
/**
 *            0
 *         1     0
 *       1  1  2   4
 */
queue.dequeue();
queue.printQueue();
/**
 *            0
 *         1     2
 *       1  1  4
 */
queue.dequeue();
queue.printQueue();
/**
 *            1
 *         1     2
 *       4  1
 */
