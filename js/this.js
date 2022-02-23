console.log(Object.keys(function () {})); // пустой массив []

console.log("-------------------------------------------");

function getTabLabel(tabName) {
  const labels = {
    theory: "theory-theory",
    extras: "extras-extras",
    homework: "homework-homework",
  };
  return labels[tabName];
}

console.log(getTabLabel("homework")); // homework-homework

console.log("-------------------------------------------");

const fn = (arg) => console.log(arg); // 1
fn(1, 2, 3);

console.log("-------------------------------------------");
//* переменной присваивается ссылка на метод обьекта -> переменная не знает про this обьекта
{
  const user = {
    tag: "Mango",
    showTag() {
      // console.log(this.tag); // Uncaught TypeError: Cannot read properties of undefined
    },
  };

  const outerShowTag = user.showTag; //* если c привязкой .bind(user) => 'Mango'
  outerShowTag();
}

console.log("-------------------------------------------");
//* функцию сделали свойством обьекта и потом вызвали
{
  const showTag = function () {
    console.log(this.tag); // Mango
  };

  const user = {
    tag: "Mango",
  };

  // console.log(user); // {tag: 'Mango'}

  user.showUserTag = showTag;
  user.showUserTag();

  // console.log(user); // {tag: 'Mango', showUserTag: ƒ}
}

console.log("-------------------------------------------");
//* в вызове функции передана ссылка на функцию showTag -> она не знает про this
{
  const user = {
    tag: "Mango",
    tag: "Mango",
    showTag() {
      // console.log(this.tag); // Uncaught TypeError: Cannot read properties of undefined
    },
  };

  const invokeAction = function (action) {
    action();
  };

  invokeAction(user.showTag); //* если c привязкой .bind(user) => Mango
}

console.log("-------------------------------------------");
//* вызов changeColor до того как она узнала про this
{
  const makeChangeColor = function () {
    const changeColor = function (color) {
      console.log(this); // undefined
      // this.color = color; // Uncaught TypeError: Cannot set properties of undefined
    };

    changeColor();

    const sweat = {
      tag: "teal",
    };
    sweat.updateColor = changeColor;

    return sweat.updateColor;
  };
  makeChangeColor();
}

console.log("-------------------------------------------");
//* changeColor логирует this -> в 105 строке передан обьект sweat
{
  const makeChangeColor = function () {
    const changeColor = function (color) {
      console.log(this); // {tag: 'teal', updateColor: ƒ}
    };

    const sweat = {
      tag: "teal",
    };

    sweat.updateColor = changeColor;
    sweat.updateColor("red");

    return sweat.updateColor;
  };
  makeChangeColor();
}

console.log("-------------------------------------------");
//* changeColor логирует this -> color не используется
{
  const makeChangeColor = function () {
    const changeColor = function (color) {
      console.log(this); // undefined
    };

    const sweat = {
      tag: "teal",
    };

    sweat.updateColor = changeColor;

    return sweat.updateColor;
  };
  const sweatColor = makeChangeColor();
  // console.log(sweatColor); // ссылка на changeColor
  sweatColor("blue");
}

console.log("-------------------------------------------");
//* changeColor логирует this -> color используется
{
  const makeChangeColor = function () {
    const changeColor = function (color) {
      this.color = color;
      console.log(this); // {tag: 'teal', color: 'blue', updateColor: ƒ}
      console.log(this.color); // blue
    };

    const sweat = {
      tag: "teal",
    };

    sweat.updateColor = changeColor;

    return sweat.updateColor.bind(sweat);
  };
  const sweatColor = makeChangeColor();
  // console.log(sweatColor); // ссылка на changeColor
  sweatColor("blue");
}
console.log("-------------------------------------------");
//* .forEach принимает вторым параметром обьект и запоминает его

const numbers = [5, 10, 15, 25];
numbers.forEach(
  function (number) {
    console.log(number);
    console.log(this.a);
  },
  { a: "Hello" }
);

console.log("-------------------------------------------");
//* вложенная в .map функция ничего не возвра - значит undefined
{
  const numbers = [5, 10, 15, 25];
  const arrNumbers = numbers.map(function (number) {
    console.log(number);
    // return number; - был бы возвращен массив чисел
  });
  console.log("⭐ ~ arrNumbers", arrNumbers); // [undefined, undefined, undefined, undefined]
}

console.log("-------------------------------------------");
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs", "react"] },
  { id: "001", likes: 15, tags: ["nodejs", "react", "css"] },
  { id: "002", likes: 2, tags: ["js", "nodejs", "css"] },
  { id: "003", likes: 8, tags: ["react", "css"] },
];

const allTags = tweets
  .reduce((acc, tweet) => [...acc, ...tweet.tags], [])
  .filter((item, index, array) => array.indexOf(item) === index);
console.log("⭐ ~ allTags", allTags); // ['js', 'nodejs', 'react', 'css']

console.log("-------------------------------------------");
//* Напишите две функции letMeSeeYourName(callback) - через prompt спрашивает имя и вызывает callback  greet(name) - принимающий имя и логирующий в консоль строку "привет <name>". Реализовать проверку что prompt не пустой.

// function letMeSeeYourName(greet) {
// let enteredName = prompt("Greetings, enter your name");

// while (!enteredName) {
// enteredName = prompt("Need your name");
//   }

//   greet(enteredName);
// }

// function greet(name) {
//   console.log(`Hi ${name}`);
// }

// letMeSeeYourName(greet);

console.log("-------------------------------------------");
//* Написать две функции makeProduct(name,price,cb) - создает обьект товара, добавляя id и вызывает cb передавая ему созданный обьект. showProduct(product) - cb принимающий обьект и логирующий его в консоль.

function makeProduct(name, price, cb) {
  const obj = {
    id: Math.floor(Math.random() * 1000),
    name,
    price,
  };
  return cb(obj);
}

function showProduct(product) {
  console.log(product);
}

makeProduct("cat", 200, showProduct);
makeProduct("dog", 800, showProduct);

console.log("-------------------------------------------");

const makeDish = function (name, dish) {
  console.log(`${name} cooks ${dish}`);
};

makeDish("Mango", "apple pie");

//* она же через замыкание

function shefName(name) {
  return function makeDish(dish) {
    console.log(`пример функции-замыкания - ${name} cooks ${dish}`);
  };
}

const mango = shefName("Mango");
mango("apple pie");

console.log("-------------------------------------------");
//* each(arr, cb) принимает массив и функ, которая применится к каждому эл массива. each должна вернуть новый массив, эе-ми которого будут результаты вызова cb(умножает эл-ты на 2)

function each(arr, cb) {
  return console.log(cb(arr));
}

function multiplyByTwo(arr) {
  const newArr = [];
  for (let ar of arr) {
    ar = ar * 2;
    newArr.push(ar);
  }
  return newArr;
}

each([5, 8, 25, 6], multiplyByTwo);
each([1, 1, 1, 1], multiplyByTwo);

console.log("-------------------------------------------");
//* makeCounter возвр другую функцию которая считает колличество своих вызовов

function makeCounter() {
  let x = 0;

  return () => (x += 1);
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log("counter1: ", counter1());
console.log("counter1: ", counter1());
console.log("counter1: ", counter1());
console.log("counter2: ", counter2());
console.log("counter2: ", counter2());

console.log("-------------------------------------------");
//* savePassword(password) принимает пароль и возвр функ которая принимает строку и возвр буль true если строка совпадает с сохраненным паролем и false если нет

const PASSWORD = "1111";

function savePassword(password) {
  return function (userPassword) {
    return userPassword === password;
  };
}

const enteredPassword = savePassword("qwerty");

console.log(enteredPassword("qwerty"));
console.log(enteredPassword("bf"));

console.log("-------------------------------------------");

const person = {
  firstName: "bob",
  showName() {
    console.log(this.firstName);
  },
};

const foo = function (callback) {
  callback();
};

foo(person.showName);
person.showName();

console.log("-------------------------------------------");

{
  const person = {
    age: 10,
    setAge(newAge) {
      this.age = newAge;
    },
    refreshAge(userId) {
      console.log(1)
      fetchAgeFromDb(function (newAge) {
        console.log(3)
        this.setAge(newAge);
      });
    },
  };

  function fetchAgeFromDb(cb) {
    console.log(2)
    // cb(20);
  }

  person.refreshAge();
  console.log(person.age);
}

console.log("-------------------------------------------");

const name = "bob";
const age = 20;
const obj = { name, age };

console.log(obj);

console.log("-------------------------------------------");
{
const confused = "no";
const myKey = confused;

const obj = {
  myKey: false, // myKey
  [myKey]: false, // no
};

  console.log(obj);
}

console.log("-------------------------------------------");

const piece = {
  x: 0,
  y: 0,
  move(x, y) {
    this.x = x;
    this.y = y;
  },
};

piece.move(10, 10);
console.log(piece);

console.log("-------------------------------------------");


const [first, , third] = "hello sweet world".split(" ");
console.log(first, third); // hello world
console.log(third); // world
console.log([first, , third]); // ['hello', empty, 'world']

console.log("-------------------------------------------");
{

const {
  name,
  age,
  gender = "m",
  hairColor: color,
} = {
  name: "bob",
  age: 20,
  hairColor: "blue",
};}

console.log(name, age, gender, color);

console.log("-------------------------------------------");

// let b = 20;
// const x = 5

// if (true) {
//   // console.log(b);
//   console.log(b);
//   let b = 10;
//   console.log(x)
//   const x = 555;
// }
// console.log(b);

