
// ### 1. var, let, const
// - var: Function-scoped ya globally-scoped variable, jo dobara declare aur update kiya ja sakta hai.
// - let: Block-scoped variable, jo dobara usi scope mein declare nahi kiya ja sakta, magar update kiya ja sakta hai.
// - const: Block-scoped constant, jo dobara declare ya update nahi kiya ja sakta

javascript
var a = 1;
let bb = 2;
const c = 3;

function testScope() {
  var d = 4;
  if (true) {
    let e = 5;
    console.log(e); // 5
  }
  // console.log(e); // Error: e is not defined
  console.log(d); // 4
}
testScope();


// ### 2. Hoisting
// - JavaScript ka default behavior jismein declarations ko current scope ke top par move kar diya jata hai.

javascript
console.log(x); // undefined
var x = 5;

hoistedFunction(); // "I am hoisted"
function hoistedFunction() {
  console.log("I am hoisted");
}


// ### 3. Template Literals
// - Embedded expressions, multi-line strings, aur string interpolation ki ijazat dete hain..

let nam = 'John';
let greeting = `Hello, ${nam}!`;
let multilineString = `This is a 
multiline 
string.`;

console.log(greeting); // "Hello, John!"
console.log(multilineString);


// ### 4. Ternary Operators
// - Ek conditional operator jo ek shart ke mutabiq ek value assign karta hai.

javascript
let age = 18;
let canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // "Yes"


// ### 5. Circuits
// - Short-circuit evaluation: Logical operators (&&, ||) expressions ko left se right ki taraf evaluate karte hain, aur jaise hi natija tay ho jata hai, wahan ruk jaate hain.

javascript
let a = true;
let r = false;
console.log(a || r); // true
console.log(a && r); // false


// ### 6. Spread Operators & Rest Operators
// - * Spread Operator *: Ek array ya object ko individual elements mein expand karta hai.
// - * Rest Operator *: Multiple elements ko ek array mein collect karta hai.

javascript
// Spread
let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a: 1, b: 2, c: 3}

// Rest
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


// ### 7. Destructuring of Array & Object
// - Arrays ya objects se values ko distinct variables mein extract karna

javascript
let [x, y] = [1, 2];
console.log(x, y); // 1 2

let { a, b } = { a: 3, b: 4 };
console.log(a, b); // 3 4


// ### 8. Pass By Value and Pass By Reference
// - * Pass By Value *: Primitive data types ko value ke zariye pass kiya jata hai.
// - * Pass By Reference *: Objects ko reference ke zariye pass kiya jata hai

javascript
let num = 10;
function modifyNum(val) {
  val = 20;
}
modifyNum(num);
console.log(num); // 10 (pass by value)

let obj = { prop: 10 };
function modifyObj(o) {
  o.prop = 20;
}
modifyObj(obj);
console.log(obj.prop); // 20 (pass by reference)


// ### 9. Object Methods
// - ** Object.keys() **: Object ki apni property names ka array lautaata hai.
// - ** Object.values() **: Object ki apni property values ka array lautaata hai.
// - ** Object.freeze() **: Object ko freeze kar deta hai, modifications ko rokta hai.
// - ** Object.entries() **: Object se key-value pairs ka array lautaata hai.

javascript
let person = { name: 'Alice', age: 25 };

console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["Alice", 25]

Object.freeze(person);
person.age = 30; // No effect
console.log(person.age); // 25

console.log(Object.entries(person)); // [["name", "Alice"], ["age", 25]]


// Yeh concepts JavaScript mein advanced topics ki wide range cover karte hain, jo zyada mushkil programming tasks ke liye mazboot bunyadiyaat faraham karte hain.

// ### 10. Functions

// #### a. Higher-Order Functions
// - Aisi functions jo doosre functions ko arguments ke roop mein lete hain ya functions ko apne result ke roop mein return karte hain.

javascript
function higherOrderFunction(fn) {
  return function (x) {
    return fn(x) * 2;
  }
}

function multiplyBy3(num) {
  return num * 3;
}

const resultFunction = higherOrderFunction(multiplyBy3);
console.log(resultFunction(5)); // 30

// #### b. Callback Function
// - Ek function jo doosre function mein argument ke roop mein pass kiya jata hai, phir usko outer function ke andar invoke kiya jata hai

javascript
function greeting(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function callbackFunction() {
  console.log('This is the callback function.');
}

greeting('John', callbackFunction);


// #### b. Callback Function
// - Ek function jo doosre function mein argument ke roop mein pass kiya jata hai, phir usko outer function ke andar invoke kiya jata hai

javascript
const add = (x, y) => x + y;
console.log(add(2, 3)); // 5

// #### d. Closures
// - Aisi functions jo doosre function ke scope se variables tak access rakhte hain

javascript
function outerFunction() {
  let outerVariable = 'I am from outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // "I am from outer function"


// #### e. Lexical Scoping
// - Ek scope ki qisam jahan ek function ka scope uske source code mein uske physical location ke zariye determine hota hai

javascript
function parent() {
  let a = 10;

  function child() {
    console.log(a); // 10
  }

  child();
}

parent();


// #### f. Default Parameters
// - Default values ke saath function parameters

javascript
function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}

greet(); // "Hello, Guest"
greet('Alice'); // "Hello, Alice"