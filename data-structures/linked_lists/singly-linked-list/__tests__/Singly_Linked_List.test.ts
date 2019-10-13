/* eslint-disable @typescript-eslint/explicit-function-return-type */
import SinglyLinkedList from "../src/Singly_Linked_List";

describe("Singly Linked List test suite", () => {
  let list, result;
  describe("push() test cases", () => {
    it("should add multiple nodes ", () => {
      list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      result = list.print();
      expect(result).toEqual([1, 2, 3, 4, 5]);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(5);
    });
    it("should add nodes to the linked list using the constructor to push nodes", () => {
      list = new SinglyLinkedList([1, 2, 3, 4, 5]);
      result = list.print();
      expect(result).toEqual([1, 2, 3, 4, 5]);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(5);
    });
    it("should add a node to the end of an already defined linked list", () => {
      list = new SinglyLinkedList([2, 5, 3, 1, 2]);
      list.push(4);
      result = list.print();
      expect(result).toStrictEqual([2, 5, 3, 1, 2, 4]);
      expect(list.head.val).toBe(2);
      expect(list.tail.val).toBe(4);
    });
  });
  describe("unshift() test cases", () => {
    it("should add multiple nodes to the start of an empty linked list", () => {
      list = new SinglyLinkedList();
      list.unshift(1);
      list.unshift(2);
      list.unshift(3);
      list.unshift(4);
      list.unshift(5);
      result = list.print();
      expect(list.head.val).toBe(5);
      expect(list.tail.val).toBe(1);
      expect(result).toStrictEqual([5, 4, 3, 2, 1]);
    });
    it("should add a node to the start of an already populated linked list", () => {
      list = new SinglyLinkedList([1, 2, 3]);
      list.unshift(0);
      result = list.print();
      expect(list.head.val).toBe(0);
      expect(list.tail.val).toBe(3);
      expect(result).toStrictEqual([0, 1, 2, 3]);
    });
  });
  describe("pop() test cases", () => {
    it("should add remove the last node from the list and set the tail to the correct value", () => {
      list = new SinglyLinkedList([1, 2, 3, 4, 5]);
      let popped = list.pop();
      result = list.print();
      expect(result).toEqual([1, 2, 3, 4]);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(4);
      expect(popped.val).toBe(5);
      popped = list.pop();
      result = list.print();
      expect(result).toEqual([1, 2, 3]);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(3);
      expect(popped.val).toBe(4);
    });
    it("should remove the only node in the list and set head and tail to be null", () => {
      list = new SinglyLinkedList([1]);
      const popped = list.pop();
      result = list.print();
      expect(result).toStrictEqual([]);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(popped.val).toBe(1);
    });
    it("should return undefined when pop is called on an empty list", () => {
      list = new SinglyLinkedList();
      const popped = list.pop();
      expect(popped).toBeUndefined();
    });
  });
  describe("shift() test cases", () => {
    it("should remove the first node in a populated list and set the head to the correct value", () => {
      list = new SinglyLinkedList([1, 2, 3, 4, 5]);
      let shifted = list.shift();
      result = list.print();
      expect(result).toStrictEqual([2, 3, 4, 5]);
      expect(shifted.val).toBe(1);
      expect(list.head.val).toBe(2);
      expect(list.tail.val).toBe(5);
      list = new SinglyLinkedList([2, 5, 3, 12, 23]);
      shifted = list.shift();
      result = list.print();
      expect(result).toStrictEqual([5, 3, 12, 23]);
      expect(shifted.val).toBe(2);
      expect(list.head.val).toBe(5);
      expect(list.tail.val).toBe(23);
    });
    it("should remove the only node from the list and set head and tail to be null", () => {
      list = new SinglyLinkedList([1]);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(1);
      const shifted = list.shift();
      result = list.print();
      expect(shifted.val).toBe(1);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(result).toStrictEqual([]);
    });
    it("should return undefined when shift is called on an empty list", () => {
      list = new SinglyLinkedList();
      const shifted = list.shift();
      expect(shifted).toBeUndefined();
    });
  });
  describe("get() test cases", () => {
    it("should return the correct value based on the valid input", () => {
      list = new SinglyLinkedList([1, 2, 3, 4, 5]);
      result = list.get(0);
      expect(result.val).toBe(1);
      result = list.get(1);
      expect(result.val).toBe(2);
      result = list.get(3);
      expect(result.val).toBe(4);
      result = list.get(4);
      expect(result.val).toBe(5);
    });
    it("should return null when an invalid index is input", () => {
      list = new SinglyLinkedList([1, 2, 3, 4, 5]);
      result = list.get(-1);
      expect(result).toBeNull();
      result = list.get(5);
      expect(result).toBeNull();
      result = list.get(100);
      expect(result).toBeNull();
    });
  });
  describe("set() test cases", () => {
    it("should set the value of the input index and still remain a valid linked list", () => {
      list = new SinglyLinkedList([0, 2, 3, 4, 7]);
      result = list.set(1, 0);
      expect(list.head.val).toBe(1);
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 7]);
      expect(result).toBeTruthy();
      result = list.set(5, 4);
      expect(list.tail.val).toBe(5);
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 5]);
      expect(result).toBeTruthy();
      result = list.set(10, 2);
      expect(list.print()).toStrictEqual([1, 2, 10, 4, 5]);
    });
    it("should return false for invalid index inputs", () => {
      list = new SinglyLinkedList([0, 2, 3, 4, 7]);
      result = list.set(1, -1);
      expect(result).toBeFalsy();
      result = list.set(23, 2001);
      expect(result).toBeFalsy();
      expect(list.print()).toStrictEqual([0, 2, 3, 4, 7]);
    });
  });
  describe("insert() test cases", () => {
    it("should insert a new node in the correct place with a valid input index", () => {
      list = new SinglyLinkedList([1, 3, 5, 7]);
      result = list.insert(2, 1);
      expect(list.print()).toStrictEqual([1, 2, 3, 5, 7]);
      result = list.insert(4, 3);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 5, 7]);
      result = list.insert(6, 5);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
      result = list.insert(0, 0);
      expect(result).toBeTruthy();
      expect(list.head.val).toBe(0);
      expect(list.print()).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7]);
      result = list.insert(8, 8);
      expect(list.tail.val).toBe(8);
      expect(result).toBeTruthy();
      expect(list.print()).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      list = new SinglyLinkedList();
      list.insert(0, 0);
      expect(list.print()).toStrictEqual([0]);
      expect(list.head.val).toBe(0);
      expect(list.tail.val).toBe(0);
    });
    it("should return false for an invalid input index", () => {
      list = new SinglyLinkedList([1, 2, 3]);
      result = list.insert(0, -10);
      expect(result).toBeFalsy();
      result = list.insert(0, 10);
      expect(result).toBeFalsy();
    });
  });
  describe("remove() test cases", () => {
    it("should remove the input index from the linked list", () => {
      list = new SinglyLinkedList([1, 2, 3, 4, 5]);
      result = list.remove(0);
      expect(result.val).toBe(1);
      expect(list.head.val).toBe(2);
      expect(list.print()).toStrictEqual([2, 3, 4, 5]);
      result = list.remove(3);
      expect(result.val).toBe(5);
      expect(list.tail.val).toBe(4);
      expect(list.print()).toStrictEqual([2, 3, 4]);
      result = list.remove(1);
      expect(list.print()).toStrictEqual([2, 4]);
    });
    it("should return undefined if an invalid index is input", () => {
      list = new SinglyLinkedList([1, 2, 3, 4, 5]);
      result = list.remove(-10);
      expect(result).toBeUndefined();
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 5]);
      result = list.remove(10);
      expect(list.print()).toStrictEqual([1, 2, 3, 4, 5]);
      expect(result).toBeUndefined();
    });
  });
  describe("reverse() test cases,", () => {
    it("should return a reversed list if the list is valid", () => {
      list = new SinglyLinkedList([1, 2, 3, 4, 5]);
      list.reverse();
      expect(list.print()).toStrictEqual([5, 4, 3, 2, 1]);
      expect(list.head.val).toBe(5);
      expect(list.tail.val).toBe(1);
      list = new SinglyLinkedList([1]);
      list.reverse();
      expect(list.print()).toStrictEqual([1]);
    });
    it("should return the same list if the list is empty", () => {
      list = new SinglyLinkedList();
      list.reverse();
      expect(list.print()).toStrictEqual([]);
    });
  });
});
