const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
]);

map.set('e', 10); // add key value

console.log(map.has('d'));
console.log(map.size);
map.clear();

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}
