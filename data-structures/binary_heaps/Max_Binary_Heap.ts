export default class MaxBinaryHeap {
  private values: any[];
  public constructor(data?: any[]) {
    this.values = [];
    /**
     * If any values are passed in as a parameter,
     * execute the insert method on each of the
     * elements
     */
    if (data) data.forEach((element): void => this.insert(element));
  }

  /**
   * Method to print out the values from the binary heap
   */
  public printHeap = (): void => {
    return console.log(this.values);
  };

  /**
   * Method to insert a value into the max binary heap.
   * @param value - the value to insert into the binary
   * tree
   */
  public insert = (value: any): void => {
    /**
     * Push the value to the end of the array, and then
     * use the bubble up method to move the value up
     * the binary heap into its correct spot.
     */
    this.values.push(value);
    this.bubbleUp();
  };

  /**
   * Method to remove the maximum value from the binary
   * heap, and rearrange all of the other elements so it
   * is a valid heap once more.
   */
  public extractMax = (): any => {
    /**
     * Pop the last value from the end of the values array, and
     * save it in a constant for swapping the value if necessary.
     * Store the max element (root) in a constant to return as the
     * element which is being returned from the method.
     */
    const max = this.values[0];
    const end = this.values.pop();
    /**
     * If the length of the values array is larger than 0 after
     * popping the last element, then set the first element in the
     * values array to be the end element.
     */
    if (this.values.length > 0) {
      this.values[0] = end;
      /**
       * Execute the sinkDown method to move the previous
       * end (now first) element to it's correct spot.
       */
      this.sinkDown();
    }
    /**
     * Return the max element as this is what was removed from
     * the heap.
     */
    return max;
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
   * Method to sort the binary heap once the an element has
   * been added to the end, as it's more than likely not in
   * its correct spot.
   */
  private bubbleUp = (): void => {
    /**
     * Create a let to store the index which the element that
     * was pushed into the array (the last element in the
     * values array), and create a constant for the value of
     * that index so it can be compared later.
     */
    let idx: number = this.values.length - 1;
    const element: any = this.values[idx];
    /**
     * Loop through the binary heap while the index is valid
     * (above 0).
     */
    while (idx > 0) {
      /**
       * Find the parent index of the current idx ((n-1)/2),
       * store it in a constant and save the value of that
       * index in the parent constant.
       */
      const parentIdx: number = Math.floor((idx - 1) / 2);
      const parent: any = this.values[parentIdx];
      /**
       * If the parent is equal to or larger than the element,
       * then break the loop as it's in its correct spot.
       */
      if (element <= parent) break;
      /**
       * If the element is smaller, then you need to swap the
       * values (using the swap method), and set idx to be
       * parentIdx because that is where the element will now
       * be in the binary heap. Keep looping until the value
       * is in its correct spot.
       */
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
  };

  /**
   * Method to move the element down the binary heap after extractMax
   * has moved the last element to the root, because that element will
   * be incorrectly placed for a valid binary heap.
   */
  private sinkDown = (): void => {
    /**
     * Create a let to store the current index, and set it to 0;
     * then set the element constant to be the value from idx
     * because the first element in the values array is the current
     * variable that needs to be compared to others.
     */
    let idx: number = 0;
    const element: any = this.values[0];
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
      const leftIdx: number = 2 * idx + 1;
      const rightIdx: number = 2 * idx + 2;
      let leftChild, rightChild: any;
      /**
       * Create a swap variable and initialise it to be null, so it can
       * later be set to the left or right child to swap at the end of the
       * loop if necessary.
       */
      let swap: number = null;
      /**
       * If the index of the left child is less than the length, then it is
       * a valid value, so leftChild can be set to be the left child's index.
       * If leftChild is larger than the current element, then it needs to
       * be swapped, so set the swap variable to be leftIdx.
       */
      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild > element) swap = leftIdx;
      }
      /**
       * If index of the right child is less than the length, then it is a
       * valid value, so rightChild can be set to the right child's index.
       */
      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        /**
         * If no swap has been made in the previous if statement (swap is
         * null) and the right child is larger than the element, then swap
         * needs to be set to the right child's index. If there was a swap
         * in the previous if statement (swap is not null) and the right
         * child is larger than the left child, swap should be set to be
         * the right child's index as you should swap the larger element.
         */
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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
      this.swap(idx, swap);
      idx = swap;
    }
  };
}

const heap = new MaxBinaryHeap([55, 39, 27, 12, 33, 41, 18]);
heap.printHeap();
heap.extractMax();
heap.printHeap();

// [55, 39, 41, 18, 27, 12, 33]
// [41, 39, 33, 18, 27, 12]
