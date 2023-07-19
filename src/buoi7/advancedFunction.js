// 1. Scope - phạm vi
//  1.1. Các loại phạm vi
//  1.1.1. Phạm vi toàn cục.
//  1.1.2. Phạm vi khối mã - let, const.
//  1.1.3. Phạm vi hàm - var, function
//  1.2. Khi gọi hàm sẽ tạo ra một phạm vi mới cho hàm đó.
//  1.3. Trong phạm vi hàm thì có thể truy cập được các biến
//       trong phạm vi đó và bên ngoài nó.
//  1.4. Cách mà một biến hoặc hàm được truy cập.
//  1.5. Khi nào biến được xoá khỏi bộ nhớ.
// 2. Hoisting
//  2.1. Hoisting là gì? -> OK
//  2.2. Hoisting với var và function declaration
//  2.3. Hoisting với let, const và function expression
//  2.4. Bonus: thế thì hoist để làm gì? -> OK
// 3. IIFE (Immediatly Invoked Funtion Expression)
//  3.1. IIFE là gì? -> OK
//  3.2. Định nghĩa một IIFE -> OK
//  3.3. Lưu ý về dấu ";"
//  3.4. Ứng dụng của IIFE
//  3.5. Còn cách nào để tạo ra 1 IIFE nữa không?
// 4. Closure

// Scope => Toan cuc
// var fullName = "Vinh Ky";
// console.log(fullName);

// Scope => Khối mã (block code)
// {
//   {
//     {
//       {
//         let fullName1 = "Vĩnh Kỳ";
//         console.log(fullName1);
//       }
//     }
//   }
// }

// Scope => Function
// function inTen() {
//   var fullName2 = "Tho";
//   let fullName3 = "La Quoc Luong";
//   console.log(fullName2);
//   function inTuoi() {
//     console.log(20);
//   }
//   inTuoi();
// }
// inTen();
// {
//   {
//     {
//       var c = "Day la C";
//     }
//   }
// }
// console.log(c);

// Khi gọi hàm sẽ tạo ra một phạm vi mới cho hàm đó.
// function inThongTin(thongTin) {
//   console.log(thongTin);
// }
// inThongTin("asd");
// inThongTin(20);
// inThongTin(false);
// let a = "a";
// {
//   let additional = "in them";
//   function inThongTin(thongTin) {
//     let type = "[Info]";
//     console.log(type, thongTin, additional, a);
//   }
//   inThongTin("asd");
//   inThongTin(20);
//   inThongTin(false);
// }
// function makeCounter() {
//   let counter = 0;
//   function increase() {
//     return ++counter;
//   }
//   return increase;
// }
// const countTo = makeCounter();
// const afterAdd1 = countTo();
// const afterAdd2 = countTo();
// const afterAdd3 = countTo();

// const countUp = makeCounter();
// const afterAdd4 = countUp();
// const afterAdd5 = countUp();
// const afterAdd6 = countUp();
// console.log(afterAdd1);
// console.log(afterAdd2);
// console.log(afterAdd3);

// console.log(afterAdd4);
// console.log(afterAdd5);
// console.log(afterAdd6);

// Cách mà một biến hoặc hàm được truy cập.
// {
//   let a = 1;
//   {
//     let a = 5;
//     {
//       console.log(a);
//     }
//   }
// }

// Khi nào biến được xoá khỏi bộ nhớ.
// let b = 100;
// console.log(b);

// function inGioiTinh() {
//   let gioiTinh = "nam";
//   console.log(gioiTinh);
// }

// inGioiTinh();

// 2. Hoisting
//  2.2. Hoisting với var và function declaration
// console.log(age);
// var age = 10;

// let tong = tinhTong(9, 10);
// console.log(tong);
// function tinhTong(a, b) {
//   return a + b;
// }

// function makeCounter1() {
//   let counter = 0;
//   return increase;
//   function increase() {
//     return ++counter;
//   }
// }

// const count1 = makeCounter1();
// console.log(count1());

//  2.3. Hoisting với let, const và function expression
// {
//   let d = 10;
//   {
//     let d = 20;
//     {
//       console.log(d);
//       let d = 30;
//     }
//   }
// }

// let a = 10;
// {
//   {
//     let a = 30;
//   }
//   console.log(a);
//   let a = 20;
// }

// 3. IIFE (Immediatly Invoked Funtion Expression)

//  3.3. Lưu ý về dấu ";"
// let fullName = "Vinh Ky"
// ;(function (tenHam) {
//   console.log("Day la", tenHam)
// })("Ham 1")

//  3.4. Ứng dụng của IIFE

// let arr = [];
// arr = null;
// arr.push("BMW");
// arr.push("Toyota");
// console.log(arr);

// (function () {
//   let arr = [];
//   arr.push("BMW");
//   arr.push("Toyota");
//   console.log(arr);
// })();

//  3.5. Còn cách nào để tạo ra 1 IIFE nữa không?
// +function (tenHam) {
//   console.log("Day la", tenHam);
// }("Ham 1");
// !!function (tenHam) {
//   console.log("Day la", tenHam);
// }("Ham 1");

// Bonus: bài tập bonus về IIFE
// (function js(x) {
//   const y = j => j * x;

//   console.log(y(s()));

//   function s() {
//     return j();
//   }

//   function j() {
//     return x ** x;
//   }
// })(3);
