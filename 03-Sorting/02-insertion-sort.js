function insertionSort(arr) {
    let i = 1;
    while (i < arr.length) {
        let val = arr[i];
        if (arr[i] < arr[i - 1]) {
            arr[i] = arr[i - 1];
            arr[i - 1] = val;
            i--;
        } else i++;
    }
}

const arr = [9,8,7,6,55,44,3,3,121,2345443,423,42,4234,2,44,5];
insertionSort(arr);
console.log(arr);
