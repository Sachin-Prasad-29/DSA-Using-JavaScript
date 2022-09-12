const factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
};

console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(5));

// time complecity is O(n)
