// Determine the number n is prime or not

const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

console.log(isPrime(1));
console.log(isPrime(12));
console.log(isPrime(17));

// Big-O O(sqrt(n))
