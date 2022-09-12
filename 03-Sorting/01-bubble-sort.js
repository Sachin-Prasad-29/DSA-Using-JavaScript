function bubbleSort(arr) {
    while (1) {
        let swap = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                swap = true;
            }
        }
        if (!swap) break;
    }
}

const arr = [2, 5, 1, 3, 45, 12, 0];
bubbleSort(arr);
console.log(arr);
