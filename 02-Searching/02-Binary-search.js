function binarySearch(arr, a, i, j) {
    if (i > j) return -1;
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] === a) return mid;
    if (arr[mid] > a) return binarySearch(arr, a, i, mid - 1);
    else return binarySearch(arr, a, mid + 1, j);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

console.log(binarySearch(arr, 10, 0, arr.length - 1));
