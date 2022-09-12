//Quick sort array

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [9, 8, 7, 6, 55, 44, 3, 3, 121, 2345443, 423, 42, 4234, 2, 44, 5];

console.log(quickSort(arr));


//Average case Big -O o(nlogn)
