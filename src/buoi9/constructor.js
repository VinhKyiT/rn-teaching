// Define 1 object theo kiểu chúng ta thường làm
// let exciter150 = {
//   name: "Exciter 150",
//   brand: "Yahama",
//   color: "black",
//   run: function () {
//     return `Ban dang chay xe ${this.name} mau ${this.color} cua hang ${this.brand}`;
//   }
// };
// console.log(exciter150);

// Hàm constructor
// function Bike(name, brand, color) {
//   // console.log("abc");
//   if (!new.target) {
//     throw Error('Không thể gọi constructor mà thiếu "new".');
//   }
//   // console.log("def");

//   // Thuộc tính / properties
// //   this.name = name;
//   this.brand = brand;
//   this.color = color;

//   // Phương thức // methods
//   this.run = function () {
//     return `Ban dang chay xe ${this.name} mau ${this.color} cua hang ${this.brand}`;
//   };
// }

// Bike.prototype.daChong = function () {
//   console.log("Đang đá chống xe " + this.name);
// };

// Bike.prototype.coYenXeKhong = true;

// const bike1 = new Bike("Jupiter", "Yamaha", "xanh");
// const bike2 = new Bike("Winner", "Honda", "trang");
// // console.log(bike1);
// // console.log(bike2);
// console.log(bike1.run === bike2.run);
// console.log(bike1.daChong === bike2.daChong);
