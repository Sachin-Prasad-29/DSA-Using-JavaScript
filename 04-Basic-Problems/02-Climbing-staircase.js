function climbStair(n) {
    if (n <= 2) return n;
    let prePreCount = 1;
    let preCount = 2;

    for (let i = 3; i <= n; i++) {
        let cur = prePreCount + preCount;
        prePreCount = preCount;
        preCount = cur;
    }
    return preCount;
}

console.log(climbStair(5));
