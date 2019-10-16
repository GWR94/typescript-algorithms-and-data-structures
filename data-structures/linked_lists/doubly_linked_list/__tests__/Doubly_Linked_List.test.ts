/* eslint-disable @typescript-eslint/explicit-function-return-type */
import DoublyLinkedList from "../src/Doubly_Linked_List";

let result, list;
describe("Doubly Linked List test suite", () => {
  describe("push() test cases", () => {
    it("should add multiple nodes on an empty list and be a valid doubly linked list", () => {
      list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.print()).toStrictEqual([1, 2, 3]);
      expect(list.head.val).toBe(1);
      expect(list.head.next.val).toBe(2);
      expect(list.head.next.prev.val).toBe(1);
      expect(list.tail.val).toBe(3);
      expect(list.tail.prev.val).toBe(2);
    });

    it("should add a node to an already populated linked list", () => {
      list = new DoublyLinkedList([1, 2, 3, 4]);
      expect(list.length).toBe(4);
      list.push(5);
      expect(list.tail.val).toBe(5);
      expect(list.tail.prev.val).toBe(4);
      expect(list.tail.prev.next.val).toBe(5);
      expect(list.length).toBe(5);
    });
  });
  describe("pop() test cases", () => {
    it("should remove the last element from an already populated list", () => {
      list = new DoublyLinkedList([1, 2, 3, 4]);
      let popped = list.pop();
      expect(popped.val).toBe(4);
      expect(list.length).toBe(3);
      expect(list.print()).toStrictEqual([1, 2, 3]);
      popped = list.pop();
      expect(popped.val).toBe(3);
      expect(list.length).toBe(2);
      expect(list.print()).toStrictEqual([1, 2]);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(2);
      expect(list.tail.next).toBeNull();
      expect(list.tail.prev.val).toBe(1);
    });
    it("should return undefined when calling pop on an empty list", () => {
      list = new DoublyLinkedList();
      let popped = list.pop();
      expect(popped).toBeUndefined();
      list.push(1);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(1);
      popped = list.pop();
      expect(popped.val).toBe(1);
      popped = list.pop();
      expect(popped).toBeUndefined();
    });
  });
  describe("unshift() test cases", () => {
    it("should add multiple nodes to the start of an empty list", () => {
      list = new DoublyLinkedList();
      list.unshift(3);
      list.unshift(2);
      list.unshift(1);
      expect(list.print()).toStrictEqual([1, 2, 3]);
      expect(list.length).toBe(3);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(3);
      expect(list.head.next.val).toBe(2);
      expect(list.tail.prev.val).toBe(2);
    });
    it("should add nodes at the start of an already populated linked list", () => {
      list = new DoublyLinkedList([1, 2, 3, 4]);
      list.unshift(0);
      expect(list.head.val).toBe(0);
      expect(list.head.next.prev.val).toBe(0);
      expect(list.length).toBe(5);
    });
  });
  describe("shift() test cases", () => {
    it("should remove the first element from an already populated list", () => {
      list = new DoublyLinkedList([1, 2, 3, 4]);
      const shifted = list.shift();
      expect(shifted.val).toBe(1);
      expect(list.head.val).toBe(2);
      expect(list.tail.prev.val).toBe(3);
      expect(list.tail.val).toBe(4);
      expect(list.length).toBe(3);
    });
    it("should return undefined when calling shift on an empty list", () => {
      list = new DoublyLinkedList();
      let shifted = list.shift();
      expect(shifted).toBeUndefined();
      list.unshift(1);
      shifted = list.shift();
      expect(shifted.val).toBe(1);
      shifted = list.shift();
      expect(shifted).toBeUndefined();
    });
  });
  describe("get() test cases", () => {
    it("should return the valid node if the input index is valid", () => {
      list = new DoublyLinkedList([1, 2, 3, 4, 5]);
      result = list.get(0);
      expect(result.val).toBe(1);
      expect(result.prev).toBeNull();
      expect(result.next.val).toBe(2);
      result = list.get(2);
      expect(result.val).toBe(3);
      expect(result.prev.val).toBe(2);
      expect(result.next.val).toBe(4);
      result = list.get(4);
      expect(result.val).toBe(5);
      expect(result.prev.val).toBe(4);
      expect(result.next).toBeNull();
    });
    it("should return undefined if an invalid index is input", () => {
      list = new DoublyLinkedList([1, 2, 3, 4, 5]);
      result = list.get(-1);
      expect(result).toBeUndefined();
      result = list.get(5);
      expect(result).toBeUndefined();
      result = list.get(10);
      expect(result).toBeUndefined();
    });
  });
  describe("set() test cases", () => {
    it("should change the value of the input index in the list", () => {
      list = new DoublyLinkedList([10, 2, 30, 4, 50]);
      result = list.set(1, 0);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([1, 2, 30, 4, 50]);
      result = list.set(3, 2);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 50]);
      result = list.set(5, 4);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it("should return false if an invalid index is input", () => {
      list = new DoublyLinkedList([10, 2, 30, 4, 50]);
      result = list.set(1, -10);
      expect(result).toBeFalsy();
      result = list.set(1, 5);
      expect(result).toBeFalsy();
      result = list.set(1, 1000);
      expect(result).toBeFalsy();
    });
  });
  describe("insert() test cases", () => {
    it("should insert the node at the correct index", () => {
      list = new DoublyLinkedList([2, 4, 6]);
      result = list.insert(1, 0);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([1, 2, 4, 6]);
      expect(list.length).toBe(4);
      result = list.insert(3, 2);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 6]);
      expect(list.length).toBe(5);
      result = list.insert(5, 4);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 5, 6]);
      result = list.insert(7, 6);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    it("should return false when an invalid index is input", () => {
      list = new DoublyLinkedList([1, 2, 3]);
      result = list.insert(1, 10);
      expect(result).toBeFalsy();
      expect(list.print()).toStrictEqual([1, 2, 3]);
      result = list.insert(1, -1);
      expect(result).toBeFalsy();
      expect(list.print()).toStrictEqual([1, 2, 3]);
      result = list.insert(1, 4);
      expect(result).toBeFalsy();
      expect(list.print()).toStrictEqual([1, 2, 3]);
    });
  });
  describe("remove() test cases", () => {
    it("should remove the node at the given index, and remain a valid doubly linked list", () => {
      list = new DoublyLinkedList([1, 2, 3, 4, 5]);
      result = list.remove(0);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([2, 3, 4, 5]);
      expect(list.length).toBe(4);
      expect(list.head.val).toBe(2);
      expect(list.head.next.prev.val).toBe(2);
      expect(list.head.next.val).toBe(3);
      result = list.remove(3);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([2, 3, 4]);
      expect(list.length).toBe(3);
      result = list.remove(1);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([2, 4]);
      expect(list.head.next.val).toBe(4);
      expect(list.tail.prev.val).toBe(2);
    });
    it("should return false when an invalid index is input", () => {
      list = new DoublyLinkedList([1, 2, 3, 4, 5]);
      result = list.remove(-1);
      expect(result).toBeFalsy();
      result = list.remove(5);
      expect(result).toBeFalsy();
      result = list.remove(10);
      expect(result).toBeFalsy();
    });
  });
  describe("reverse() test cases", () => {
    it("should correctly reverse a doubly linked list", () => {
      list = new DoublyLinkedList([1, 2, 3, 4, 5]);
      list.reverse();
      expect(list.print()).toStrictEqual([5, 4, 3, 2, 1]);
      expect(list.head.val).toBe(5);
      expect(list.tail.val).toBe(1);
    });
  });
});
