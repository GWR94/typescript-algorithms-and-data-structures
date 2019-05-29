<!-- markdownlint-disable MD033 -->
# **Priority Queues**

A priority queue is a data structure where each elements have a priority. A priority queue is different from a normal queue as instead of being a FIFO (First-In-First-Out) data structure, values come out in order by priority. Priority queues are an abstract concept, so they can be created in a variety of ways. An array can be used to construct a priority queue, however it can be inefficient to loop through the array to compare its elements priority every time a new element is added.

A better way to construct a priority queue is to use a [binary heap](../binary_heaps/README.md). The binary heap should contain nodes with both a priority and the value that can be used for a reference.

<img src="./img/priorityQueue.jpg" alt="Priority Queue" height="300">