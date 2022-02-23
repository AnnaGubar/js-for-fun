// Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined. example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } } example output '23'

const arr = ["a", "b", "c", "d"];
let x = arr.length - 1;
console.log(x)

// for (let i = 0; i <= x; i++){
//   console.log(i)
// }
// for (let i = x; i >=0; i--){
//   console.log(i)
//   console.log(arr[i])
// }

// const pathToValueFoo = (path, obj) => {
//   let key = path.splice(0, 1);

//   if (typeof obj[key] === "object") {
//     pathToValueFoo(path, obj[key]);
//   }
// };

// const pathToVal = (path, obj) =>
//   obj?.[path[0]]
//     ? pathToVal(path.slice(1), obj[path[0]])
//     : !path.length
//     ? obj
//       : undefined;
    

// const pathToVal = (path, obj) =>
//   path[0] ? pathToVal(path.slice(1), obj?.[path[0]]) : obj;

// console.log(pathToVal);