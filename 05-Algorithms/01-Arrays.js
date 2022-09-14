const arr = [1, 2, 3, 'SAchin'];

arr.push(4); //add to the last
arr.unshift(0); // add to the beginning
arr.pop(); // remove from last
arr.shift(); // remove from beginning

for (const item of arr) {
    console.log(item);
}

//insert /remove from end = O(n)
// insert/ remove from beginning o(n)
// Access - o(1)
// Search - o(n)
// push/pop - o(1)
// shift /unshift/concat/slice/splice - o(n)
//forEach / map/ filter/ reduce - o(n)
