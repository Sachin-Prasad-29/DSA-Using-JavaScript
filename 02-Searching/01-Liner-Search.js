function linerSearch(arr, a) {
    for (let i = 0; i < arr.length; i++) {
        if (a === arr[i]) return i;
    }
    return -1;
}

let arr = [2, 3, 5, 1, 32, 1, 2, 4, 2, 52, 23, 242];

console.log(linerSearch(arr, 32));
