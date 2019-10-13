import Node from "./Node";
/**
 * A singly linked list class with methods for adding, removing, inserting
 * and reversing.
 */
export default class SinglyLinkedList {
  public head: Node;
  public tail: Node;
  public length: number;

  /**
   * Constructor to initialise an empty linked list, with the head and tail values
   * as null, with the length being set to zero if no data has been input.
   * @param data - an optional array that will fill the linked list with data to
   * easily create a base linked list to work with.
   */
  public constructor(data?: any[]) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (data && Array.isArray(data)) {
      data.forEach((item): SinglyLinkedList => this.push(item));
    }
  }

  /**
   * pushing a node to the end of the linked list
   * @param val: value to add to the node
   */
  public push(val: any): SinglyLinkedList {
    /**
     * Create the node so it can be put at the end of the linked list.
     */
    const node = new Node(val);
    /**
     * If there is no head value on the linked list, then it must be empty, so
     * we need to set the head and the tail to be the newly created node.
     */
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      /**
       * If there is nodes in the linked list, set the next value of the current
       * tail to be the node, and set this.tail to be node.
       */
      this.tail.next = node;
      this.tail = node;
    }
    /**
     * Increment the length as there's a new value, and return the whole linked list.
     */
    this.length++;
    return this;
  }

  /**
   * Popping a node off of the end of the link list
   */
  public pop(): Node {
    /**
     * If there's no head node the list must be empty, so nothing can be popped off.
     */
    if (!this.head) return undefined;
    if (this.length === 1) {
      const prev = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return prev;
    }
    /**
     * Set the current variable to be this.head, so we can loop through later while
     * current has next value that isn't null.
     */
    let current = this.head;
    /**
     * Initialise a prev variable to later store the previous node in, so it can be
     * set to be the tail once there is no current.next.
     */
    let prev;
    /**
     * Loop through the list while current has a next node (next doesn't equal null)
     */
    while (current.next) {
      /**
       * Set the previous value to be the current value, and set current to be
       * current.next.
       */
      prev = current;
      current = current.next;
    }
    /**
     * Once the loop has finished executing, prev will be the value which needs to be
     * set to be the tail node, and current will be the node which needs to be returned
     * as the popped item. Set the value of prev.next to be null, as it's going to be the
     * tail where there should be no next node, and then set this.tail to be prev.
     */
    prev.next = null;
    this.tail = prev;
    this.length--;
    /**
     * Remove one from the length to signify that a node has been removed, and if the
     * length is now 0 after remove 1, this.head and this.tail should be set to be null,
     * as there are no values in the list.
     */
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    /**
     * Return the current variable, which is the one which is removed from the list.
     */
    return current;
  }

  /**
   * shifting (removing) a node from the start of the linked list
   */
  public shift(): Node {
    /**
     * If there's no head node, then the list must be empty, so return undefined.
     */
    if (!this.head) return undefined;
    /**
     * Store the current head in a variable, so it can be returned as the shifted
     * node.
     */
    const shifted = this.head;
    /**
     * Set the value of head to be shifted's next value.
     */
    this.head = shifted.next;
    /**
     * Remove one from the length to show one items has been removed, and if the list
     * is now empty (length is 0), then set the tail to be null to remove it.
     */
    this.length--;
    if (this.length === 0) this.tail = null;
    /**
     * Return the removed node
     */
    return shifted;
  }

  /**
   * unshifting (inserting) a node at the start of
   * the linked list.
   * @param val: value which we add to the newly created node
   */
  public unshift(val: any): SinglyLinkedList {
    /**
     * Create the node which will be the new head of the list
     */
    const node = new Node(val);
    /**
     * If there's no head, the list must be empty, so set the head and the tail
     * to be the newly created node.
     */
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      /**
       * If the list isn't empty, then set nodes next value to be the current
       * head, and set this.head to be the node.
       */
      node.next = this.head;
      this.head = node;
    }
    /**
     * Add one to the length, and return the whole list.
     */
    this.length++;
    return this;
  }

  /**
   * finding a node at the index provided
   * @param index: the index to find the node at
   */
  public get(index: number): Node {
    /**
     * If the index is invalid - i.e smaller than zero, or larger than
     * the length - return null as nothing can be found
     */
    if (this.length < index || index < 0) return null;
    /**
     * Loop through the list until the index is equal to count.
     */
    let count = 0;
    let current: Node = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  /**
   * replacing a nodes value with the input value (val)
   * from the given index.
   * @param val: the value to replace the found nodes val
   * property with
   * @param index: the index to find the node at.
   */
  public set(val: any, index: number): boolean {
    /**
     * Store the value return from the get method of index
     */
    const node: Node = this.get(index);
    /**
     * If the node is found, set the node's value to be the val
     * parameter, and return true.
     */
    if (node) {
      node.val = val;
      return true;
    }
    /**
     * If no value is found from the get method, return false.
     */
    return false;
  }

  /**
   * insert a new node at the given index, with the given
   * value (val) as the val property on the node.
   * @param val: the value to add to the val property of
   * the new node
   * @param index: the index which to add the new node to
   * in the linked list.
   */
  public insert(val: any, index: number): boolean {
    /**
     * If the index can't be found i.e too small or large, then
     * return false.
     */
    if (this.length < index || index < 0) return false;
    /**
     * If the index is 0, use the unshift method with !! before to
     * run the method and then return true.
     */
    if (index === 0) return !!this.unshift(val);
    /**
     * If the index is the same as length, use the push method
     * with !! before to run the method and return true.
     */
    if (index === this.length) return !!this.push(val);
    /**
     * Create the node which will be inserted into the list
     */
    const newNode = new Node(val);
    /**
     * Find the previous node, so it can have it's next property
     * to be the newNode's next node.
     */
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    /**
     * Set prevNode.next to be newNode to link the two together in the
     * list
     */
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  /**
   * removing a node from the given index in the linked
   * list.
   * @param index: the index to remove the node from
   */
  public remove(index: number): Node {
    /**
     * If the index is too small or too large to find it in the list,
     * return undefined.
     */
    if (this.length < index || index < 0) return undefined;
    /**
     * If the index is 0, use the shift method to remove the first node.
     */
    if (index === 0) return this.shift();
    /**
     * If the index is the same as length - 1, return the pop method to
     * remove the last node.
     */
    if (index === this.length - 1) return this.pop();
    /**
     * Find the previous node by using the get method on index - 1, and store
     * it's next value in a removedNode variable.
     */
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    /**
     * Set prevNode's next to be removedNode's next to remove the link to and
     * from removedNode.
     */
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  /**
   * reverse the whole linked list.
   */
  public reverse(): SinglyLinkedList {
    /**
     * Swap the current head with the tail so they are reversed.
     */
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    /**
     * Create a variable to store the previous node in, and set it to be
     * null, because this be setting this.tail's value to
     * be null, which is correct. It will later be storing the value of the
     * previous node from current to be it's next value. Both prev and next
     * need to be created outside of the loop, otherwise the data would be
     * overwritten and therefore lost.
     */
    let prev = null;
    /**
     * Initialise an empty variable to store the next node in, which will
     * essentially become the previous node from current in the new reversed
     * list.
     */
    let next;
    let count = 0;
    while (count < this.length) {
      /**
       * Set next to be current.next so it can be used once the current value
       * has been changed to prev, otherwise the data would be lost.
       */
      next = current.next;
      /**
       * Set current.next to be prev, so the next node can be the value of the
       * previous node - thus reversing the node connections.
       */
      current.next = prev;
      /**
       * Move the value of prev to be current, because the links have already
       * been reversed and we need to store the previous node for the next iteration
       * of the loop to have this value.
       */
      prev = current;
      /**
       * Move the value of current to be next, because the links have already been
       * reversed and the current value needs to be shifted up to continue through
       * the loop with the value. Add one to the
       */
      current = next;
      count++;
    }
    return this;
  }

  /**
   * print all of the values from each node in the
   * order which they are currently in.
   */
  public print(): any[] {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
    return arr;
  }
}

const list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.insert(250, 3);
list.remove(3);
list.print();
