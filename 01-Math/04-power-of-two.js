// find whether the number is power of two or not

//using bit wise operator
const isPowerOfTwoBitwise = (n) => {
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
};

const isPowerOfTwo = (n) => {
    if (n < 1) return false;
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }
    return true;
};

console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(4));
console.log(isPowerOfTwoBitwise(42));

//Big - O - O(log n)
