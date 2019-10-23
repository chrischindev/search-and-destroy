"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let hashTable = {};
  let currentNode = linkedlist.head;
  // we loop until we reach the tail, or until we reach a duplicate value
  while (currentNode) {
    let value = currentNode.value;
    // if we encounter a new value, we store it in the hashTable
    if (!hashTable[value]) {
      hashTable[value] = true;
      // moving to the next node
      currentNode = currentNode.next;
    }
    // else we've seen this value before, so we have encountered a loop
    else return true;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
