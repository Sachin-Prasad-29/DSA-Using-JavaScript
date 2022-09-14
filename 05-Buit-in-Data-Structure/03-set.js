const set = new Set([4, 3, 6, 1, 2, 3]);

for (const item of set) {
    console.log(item);
}

console.log(set.has(4));
set.delete(3);
console.log(set);
console.log(set.size);
set.clear();
console.log(set);

// Its same as HashSet in Java
