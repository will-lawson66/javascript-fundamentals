import "../styles/index.scss";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

console.log("webpack starterkit");

// const carId = 42;

// if (true) {
//   let carId = 100; //block-scoped
// }
// console.log(carId); // undefined

// if (true) {
//   var carId = 100;
// }
// console.log(carId);

// // array destructuring and rest operator
// let carIds = [100, 200, 300];
// let car1, car2, theRest;
// [, car2, ...theRest] = carIds;
// console.log(car1, car2, theRest); // 200 [300]

// // object destructuring
// let car = { id: 5000, style: "convertible" };
// let id, style;
// ({ id, style } = car);
// console.log(id, style);

// // spread operator
// function startCars(car1, car2, car3, ...rest) {
//   console.log(car1, car2, car3, rest);
// }
// let spread = "abcdefg"; // note string is iterable
// startCars(...spread); // spread operator

// // tpeof
// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof "abc");
// console.log(typeof "abc");
// console.log(typeof null);
// console.log(typeof abc);
// console.log(typeof NaN);
// console.log(typeof undefined);
// console.log(typeof 1 / 0);

// // type conversion
// console.log(Number.parseInt("123abc123")); //123
// console.log(Number.parseFloat("123.12A3")); //123.12

// // loop controls
// let i = 0;
// for (; i < 8; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// // block scope - let
// var message = "Outside";
// if (5 === 5) {
//   let message = "Equal";
//   console.log(message);
// }
// console.log(message);

// // IIFE
// function(){
//   console.log('in function');
// } this will not compile

// (function () {
//   console.log("in function");
// })();

// let app = (function () {
//   let carId = 123;
//   console.log("in function");
//   return {};
// })();
// console.log(app);

// // Closures
// let app = (function () {
//   let carId = 123;
//   console.log("in function");
//   let getId = function () {
//     return ++carId; // increments
//     //return carId; // does not increment
//   };
//   return {
//     getId: getId,
//   };
// })();
// console.log(app.getId());

// // this
// let o = {
//   carId: 123,
//   getId: function () {
//     return this.carId;
//   },
// };
// console.log(o.getId());

// // call
// let o = {
//   carId: 123,
//   getId: function () {
//     return this.carId;
//   },
// };
// console.log(o.getId());
// let newCar = { carId: 456 };
// console.log(o.getId.call(newCar));

// // apply
// let o = {
//   carId: 123,
//   getId: function (prefix) {
//     return prefix + this.carId;
//   },
// };
// console.log(o.getId("abc"));
// let newCar = { carId: 456 };
// console.log(o.getId.apply(newCar, ["ID: "]));

// // bind
// let o = {
//   carId: 123,
//   getId: function () {
//     return this.carId;
//   },
// };
// let newCar = { carId: 456 };
// let newFn = o.getId.bind(newCar); // copy getId and bind to new context
// console.log(newFn());

// // arrow function
// let getId = (prefix, suffix) => {
//   return prefix + 123 + suffix;
// };
// console.log(getId("Id: ", "!"));

// // default parameters
// let trackCar = (carId, city = "NY") => {
//   console.log(`Tracking ${carId} in ${city}.`); // note the string interpolation
// };
// trackCar(123);
// trackCar(123, "Chicago");

// constructor functions
// function Car() {
//   console.log(this);
// }
// let car = new Car();

// function Car(id) {
//   this.carId = id;
//   this.start = function () { // method
//     console.log("start " + this.carId);
//   };
// }
// let vehicle = new Car(123);
// vehicle.start();

// // prototypes
// function Car(id) {
//   this.carId = id;
// }
// Car.prototype.start = function () {
//   console.log("start " + this.carId);
// };
// let vehicle = new Car(123);
// vehicle.start();

// array iteration
let carIds = [
  {
    carId: 123,
    style: "sedan",
  },
  {
    carId: 456,
    style: "convertible",
  },
  {
    carId: 789,
    style: "suv",
  },
];
carIds.forEach((car) => console.log(car));
carIds.forEach((car, index) => console.log(car, index));

let convertibles = carIds.filter((car) => car.style === "convertible");
console.log(convertibles);

let result = carIds.every((car) => car.carId);
console.log(result);

let find = carIds.find((car) => car.carId > 500);
console.log(find);
