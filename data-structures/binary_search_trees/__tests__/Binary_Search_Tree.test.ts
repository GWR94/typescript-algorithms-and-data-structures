/* eslint-disable @typescript-eslint/explicit-function-return-type */
import BinarySearchTree from "../src/Binary_Search_Tree";

describe("Binary Search Tree test suite", () => {
  let instance: BinarySearchTree;
  describe("insert() test cases", () => {
    it("should add a node to the binary tree", () => {
      instance = new BinarySearchTree();
      expect(instance).toBeInstanceOf(BinarySearchTree);
      instance.insert(1);
      expect(instance).toBeDefined();
      expect(instance).toEqual({
        root: {
          value: 1,
          left: null,
          right: null,
          count: 1,
        },
      });
    });

    it("should add multiple nodes to the binary tree in the correct order", () => {
      instance = new BinarySearchTree([10, 5, 15]);
      expect(instance).toBeInstanceOf(BinarySearchTree);
      expect(instance).toBeDefined();
      expect(instance).toEqual({
        root: {
          value: 10,
          count: 1,
          left: {
            count: 1,
            value: 5,
            left: null,
            right: null,
          },
          right: {
            count: 1,
            value: 15,
            left: null,
            right: null,
          },
        },
      });
    });

    it("should add a larger amount of nodes in the correct order", () => {
      instance = new BinarySearchTree([10, 5, 3, 7, 2, 4, 6, 8, 12, 11, 15, 18]);
      expect(instance).toBeInstanceOf(BinarySearchTree);
      expect(instance).toBeDefined();
      expect(instance).toEqual({
        root: {
          value: 10,
          count: 1,
          left: {
            count: 1,
            value: 5,
            left: {
              value: 3,
              count: 1,
              left: {
                value: 2,
                count: 1,
                left: null,
                right: null,
              },
              right: {
                value: 4,
                count: 1,
                left: null,
                right: null,
              },
            },
            right: {
              value: 7,
              count: 1,
              left: {
                value: 6,
                count: 1,
                left: null,
                right: null,
              },
              right: {
                value: 8,
                count: 1,
                left: null,
                right: null,
              },
            },
          },
          right: {
            value: 12,
            count: 1,
            left: {
              value: 11,
              count: 1,
              left: null,
              right: null,
            },
            right: {
              value: 15,
              count: 1,
              left: null,
              right: {
                count: 1,
                value: 18,
                left: null,
                right: null,
              },
            },
          },
        },
      });
    });

    it("should return the correct count for duplicate values", () => {
      instance = new BinarySearchTree([2, 2, 2, 1, 1, 1, 1, 3, 3, 3]);
      expect(instance).toBeInstanceOf(BinarySearchTree);
      expect(instance).toEqual({
        root: {
          value: 2,
          count: 3,
          left: {
            value: 1,
            count: 4,
            left: null,
            right: null,
          },
          right: {
            value: 3,
            count: 3,
            left: null,
            right: null,
          },
        },
      });
    });
  });

  describe("contains() test cases", () => {
    it("should return true for values which are in the binary search tree", () => {
      instance = new BinarySearchTree([5, 3, 2, 72, 12, 5, 98, 93]);
      const firstTest = instance.contains(5);
      expect(firstTest).toBeTruthy();
      const secondTest = instance.contains(93);
      expect(secondTest).toBeTruthy();
      const thirdTest = instance.contains(72);
      expect(thirdTest).toBeTruthy();
    });

    it("should return false for values which are not in the binary search tree", () => {
      instance = new BinarySearchTree([5, 3, 2, 72, 12, 5, 98, 93]);
      const firstTest = instance.contains(-10);
      expect(firstTest).toBeFalsy();
      const secondTest = instance.contains(6);
      expect(secondTest).toBeFalsy();
      const thirdTest = instance.contains(99);
      expect(thirdTest).toBeFalsy();
    });
  });

  describe("find() test cases", () => {
    it("should return the node and it's children for nodes found in the tree", () => {
      instance = new BinarySearchTree([10, 6, 15, 3, 8, 20]);
      const firstTest = instance.find(6);
      expect(firstTest).toEqual({
        value: 6,
        count: 1,
        left: {
          value: 3,
          count: 1,
          left: null,
          right: null,
        },
        right: {
          value: 8,
          count: 1,
          left: null,
          right: null,
        },
      });
      const secondTest = instance.find(15);
      expect(secondTest).toEqual({
        value: 15,
        count: 1,
        left: null,
        right: {
          value: 20,
          count: 1,
          left: null,
          right: null,
        },
      });
      const thirdTest = instance.find(20);
      expect(thirdTest).toEqual({
        value: 20,
        count: 1,
        left: null,
        right: null,
      });
    });

    it("should return null for finding values not found in the binary search tree", () => {
      const firstTest = instance.find(-10);
      expect(firstTest).toBeNull();
      const secondTest = instance.find(48);
      expect(secondTest).toBeNull();
      const thirdTest = instance.find(230);
      expect(thirdTest).toBeNull();
    });
  });

  describe("remove() test cases", () => {
    it("should remove the root node and re-order the nodes accordingly", () => {
      const firstTest = new BinarySearchTree([10, 6, 15, 3, 8, 20]);
      const secondTest = new BinarySearchTree([5, 4, 6.5, 3, 4.5, 6, 7, 8]);
      firstTest.remove(10);
      expect(firstTest).toEqual({
        root: {
          value: 8,
          count: 1,
          left: {
            value: 6,
            count: 1,
            left: {
              value: 3,
              count: 1,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 15,
            count: 1,
            left: null,
            right: {
              value: 20,
              count: 1,
              left: null,
              right: null,
            },
          },
        },
      });
      secondTest.remove(5);
      expect(secondTest).toEqual({
        root: {
          value: 4.5,
          count: 1,
          left: {
            value: 4,
            count: 1,
            left: {
              value: 3,
              count: 1,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 6.5,
            count: 1,
            left: {
              value: 6,
              count: 1,
              left: null,
              right: null,
            },
            right: {
              value: 7,
              count: 1,
              left: null,
              right: {
                value: 8,
                count: 1,
                left: null,
                right: null,
              },
            },
          },
        },
      });
    });
    it("should remove the node and remain a valid binary tree when the removed node has two children", () => {
      const firstTest = new BinarySearchTree([10, 6, 15, 3, 8, 20]);
      const secondTest = new BinarySearchTree([5, 4, 6.5, 3, 4.5, 6, 7, 8]);
      const thirdTest = new BinarySearchTree([
        10,
        5,
        12,
        3,
        7,
        11,
        15,
        2,
        4,
        6,
        8,
        18,
        1,
        2.5,
        6.5,
        7.5,
        9,
        8.5,
        20,
      ]);
      firstTest.remove(6);
      expect(firstTest).toEqual({
        root: {
          value: 10,
          count: 1,
          left: {
            value: 8,
            count: 1,
            left: {
              value: 3,
              count: 1,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 15,
            count: 1,
            left: null,
            right: {
              value: 20,
              count: 1,
              left: null,
              right: null,
            },
          },
        },
      });
      secondTest.remove(6.5);
      expect(secondTest).toEqual({
        root: {
          value: 5,
          count: 1,
          left: {
            value: 4,
            count: 1,
            left: {
              value: 3,
              count: 1,
              left: null,
              right: null,
            },
            right: {
              value: 4.5,
              count: 1,
              left: null,
              right: null,
            },
          },
          right: {
            value: 6,
            count: 1,
            left: null,
            right: {
              value: 7,
              count: 1,
              left: null,
              right: {
                value: 8,
                count: 1,
                left: null,
                right: null,
              },
            },
          },
        },
      });
      thirdTest.remove(7);
      expect(thirdTest).toEqual({
        root: {
          value: 10,
          count: 1,
          left: {
            value: 5,
            count: 1,
            left: {
              value: 3,
              count: 1,
              left: {
                value: 2,
                count: 1,
                left: {
                  value: 1,
                  count: 1,
                  left: null,
                  right: null,
                },
                right: {
                  value: 2.5,
                  count: 1,
                  left: null,
                  right: null,
                },
              },
              right: {
                value: 4,
                count: 1,
                left: null,
                right: null,
              },
            },
            right: {
              value: 9,
              count: 1,
              left: {
                value: 6,
                count: 1,
                left: null,
                right: {
                  value: 6.5,
                  count: 1,
                  left: null,
                  right: null,
                },
              },
              right: {
                value: 8,
                count: 1,
                left: {
                  value: 7.5,
                  count: 1,
                  left: null,
                  right: null,
                },
                right: {
                  value: 8.5,
                  count: 1,
                  left: null,
                  right: null,
                },
              },
            },
          },
          right: {
            value: 12,
            count: 1,
            left: {
              value: 11,
              count: 1,
              left: null,
              right: null,
            },
            right: {
              value: 15,
              count: 1,
              left: null,
              right: {
                value: 18,
                count: 1,
                left: null,
                right: {
                  value: 20,
                  count: 1,
                  left: null,
                  right: null,
                },
              },
            },
          },
        },
      });
    });
    it("should remove the node and remain a valid binary tree when the removed node has one child", () => {
      const firstTest = new BinarySearchTree([10, 6, 8, 3, 15, 20]);
      const secondTest = new BinarySearchTree([5, 4, 6.5, 3, 4.5, 6, 7, 8]);
      firstTest.remove(15);
      expect(firstTest).toEqual({
        root: {
          value: 10,
          count: 1,
          left: {
            value: 6,
            count: 1,
            left: {
              value: 3,
              count: 1,
              left: null,
              right: null,
            },
            right: {
              count: 1,
              value: 8,
              left: null,
              right: null,
            },
          },
          right: {
            value: 20,
            count: 1,
            left: null,
            right: null,
          },
        },
      });
      secondTest.remove(7);
      expect(secondTest).toEqual({
        root: {
          value: 5,
          count: 1,
          left: {
            value: 4,
            count: 1,
            left: {
              value: 3,
              count: 1,
              left: null,
              right: null,
            },
            right: {
              value: 4.5,
              count: 1,
              left: null,
              right: null,
            },
          },
          right: {
            value: 6.5,
            count: 1,
            left: {
              value: 6,
              count: 1,
              left: null,
              right: null,
            },
            right: {
              value: 8,
              count: 1,
              left: null,
              right: null,
            },
          },
        },
      });
    });
    it("should remove the node and remain a valid binary tree when the removed node has no children", () => {
      const firstTest = new BinarySearchTree([10, 6, 8, 3, 15, 20]);
      const secondTest = new BinarySearchTree([5, 4, 6.5, 3, 4.5, 6, 7, 8]);
      firstTest.remove(20);
      expect(firstTest).toEqual({
        root: {
          value: 10,
          count: 1,
          left: {
            value: 6,
            count: 1,
            left: {
              value: 3,
              count: 1,
              left: null,
              right: null,
            },
            right: {
              count: 1,
              value: 8,
              left: null,
              right: null,
            },
          },
          right: {
            value: 15,
            count: 1,
            left: null,
            right: null,
          },
        },
      });
      secondTest.remove(8);
      expect(secondTest).toEqual({
        root: {
          value: 5,
          count: 1,
          left: {
            value: 4,
            count: 1,
            left: {
              value: 3,
              count: 1,
              left: null,
              right: null,
            },
            right: {
              value: 4.5,
              count: 1,
              left: null,
              right: null,
            },
          },
          right: {
            value: 6.5,
            count: 1,
            left: {
              value: 6,
              count: 1,
              left: null,
              right: null,
            },
            right: {
              value: 7,
              count: 1,
              left: null,
              right: null,
            },
          },
        },
      });
    });
  });

  describe("Searching test cases", () => {
    instance = new BinarySearchTree([10, 6, 15, 3, 8, 20]);
    it("should return the correct array of node values using breadth first search", () => {
      const test = instance.breadthFirstSearch();
      expect(test).toStrictEqual([10, 6, 15, 3, 8, 20]);
    });
    it("should return the correct array of node values using the in-order depth first search", () => {
      const test = instance.depthFirstSearchInOrder();
      expect(test).toStrictEqual([3, 6, 8, 10, 15, 20]);
    });
    it("should return the correct array of node values using the post-order depth first search", () => {
      const test = instance.depthFirstSearchPostOrder();
      expect(test).toStrictEqual([3, 8, 6, 20, 15, 10]);
    });
    it("should return the correct array of node values using the pre-order depth first search", () => {
      const test = instance.depthFirstSearchPreOrder();
      expect(test).toStrictEqual([10, 6, 3, 8, 15, 20]);
    });
  });
});
