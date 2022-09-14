function gcd(a, b) {
    // let ans = 1;
    // for (let i = 2; i <= a; i++) {
    //     if (a % i === 0 && b % i === 0) ans = i;
    // }
    // return ans;

    if (b === 0) return a;
    return gcd(b, a % b);
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(gcd(24, 60));

console.log(lcm(24, 60));
