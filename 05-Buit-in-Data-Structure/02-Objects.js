const obj = {
    name: 'Sachin',
    age: 23,
    'key-three': true,
    sayMyName: function () {
        console.log(this.name);
    },
    sayMyName2: () => console.log(this.name),
};
obj.hobby = 'football';

console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']);

delete obj.hobby;

obj.sayMyName();
obj.sayMyName2();

const arr = Object.entries(obj);
console.log(arr);

//.keys() .values() .entries()
// insert, remove, access - o(1)
// search -O(1)
//Object.keys .values . entries - o(n)
// This is the best thing in the world and I will I will
// This is the best thing in the world and I will be the best thing inh