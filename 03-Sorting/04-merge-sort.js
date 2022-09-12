//Merge sort

function mergeSort(arr) {
    //if size of arr is empty or one return it
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [9, 8, 7, 6, 55, 44, 3, 3, 121, 2345443, 423, 42, 4234, 2, 44, 5];

console.log(mergeSort(arr));


//Big-O O(nlogn)