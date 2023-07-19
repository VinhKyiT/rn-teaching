// // "use strict";
// // function strictFunction() {
// //   nonStrictVar = 10;
// //   function innerFunction() {
// //     nonStrictVar = 20;
// //     console.log(nonStrictVar);
// //   }
// //   innerFunction();
// // }
// // strictFunction();

// // Bước 1
// function Person(name, age, gender) {
//   // Bước 3
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// // Bước 4
// Person.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.name}. I am ${this.age} years old and ${this.gender}.`
//   );
// };
// Person.prototype.introduce2 = function () {
//   this.name = "Luong";
//   this.age = 30;
//   const runFn = () => {
//     let name = "Ky";
//     let age = 20;
//     console.log(
//       `My name is ${this.name}. I am ${this.age} years old and ${this.gender}.`
//     );
//   };
//   runFn();
// };

// // // Bước 5
// const person1 = new Person("Tho", 25, "male");

// // // Bước 6
// // person1.introduce();

// // person1.introduce2();

// const inThongTin = person1.introduce2;
// inThongTin();
