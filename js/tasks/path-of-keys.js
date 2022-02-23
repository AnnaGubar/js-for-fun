//*** Оператор опциональной последовательности ?. */

// Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined. example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } } example output '23'

const path = ["a", "b", "c", "d"];
const obj = { a: { b: { c: { d: "23" } } } };

const pathToVal = (path, obj) =>
  path.reduce((acum, cur) => {
    console.log(acum);
    console.log(cur);

    
    if (acum) {
      return acum[cur];
    }
    return undefined;

    // return acum ? acum?.[cur] : undefined; // аналог
  }, obj);

console.log(pathToVal(path, obj)); // 23
