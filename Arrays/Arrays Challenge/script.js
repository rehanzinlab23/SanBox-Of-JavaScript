const arr = [1, 2, 3, 4, 5];

arr.push(0);

arr.unshift(6);

arr.splice(1, arr.length - 2, 5, 4, 3, 2, 1); 

console.log(arr);