'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	debugger
	const midPoint = Math.floor(array.length / 2)
	const leftArr = array.slice(0, midPoint)
	const rightArr = array.slice(midPoint)

	if (target === rightArr[0] || target === leftArr[leftArr.length - 1]) return true
	if (target > rightArr[0]) {
		if (rightArr.length === 1) return false
		return binarySearch(rightArr, target)
	} 
	else if (target < leftArr[leftArr.length - 1]) {
		if (leftArr.length === 1) return false
		return binarySearch(leftArr, target)
	} return false
};

console.log(binarySearch([-0.5, 0.03, 2.6, 3, 3.5, 3.777777, 5], 0.02))

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch