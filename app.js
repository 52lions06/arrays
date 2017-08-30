const Array = require('./Array');

let arr = new Array();


arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
console.log(arr)
arr.insert(1, 10)
arr.remove(1)
console.log(arr.get(1))
