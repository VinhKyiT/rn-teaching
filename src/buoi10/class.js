// constructor function
// function Bike(name, brand) {
//   this.name = name;
//   this.brand = brand;
// }
// const bike1 = new Bike("Exciter", "Yamaha");
// console.log(bike1);

// Class
// class Bike {
//   constructor(name, brand, color) {
//     this.name = name;
//     this.brand = brand;
//     this.color = color;
//   }
//   get getName() {
//     return this.name;
//   }
//   get getBrand() {
//     return this.brand;
//   }
//   get getColor() {
//     return this.color;
//   }
//   set setName(name) {
//     if (typeof name === "string" && name.length > 3) {
//       this.name = name;
//     }
//   }
// }
// const bike1 = new Bike("Winner", "Honda", "black");
// bike1.setName = "Wave";
// const bike1 = new Bike("Winner");
// console.log("bike1", bike1.name);

// bike1.setName = 'GTR'
// console.log(bike1.getName);

// class Person {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(name) {
//     this._name = name;
//   }
// }

// let ps1 = new Person("Ky", 20);
// ps1.name = "Tho"
// console.log(ps1.name);
// console.log(ps1._age);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// console.log(Point.distance(p1, p2));

// Static method / Phương thức tĩnh
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;
//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
// // console.log(p1.distance);

// console.log(Point.distance(p1, p2));

// Hoisting trong class
// const sv1 = new SinhVien("Ky", 20);
// class SinhVien {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// console.log(sv1);

// Tinh ke thua trong class
// class ConNguoi {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.sleep = function () {
//       return `Dang ngu`;
//     };
//   }
//   hair = "black";
//   walk() {
//     return `${this.name} đang đi bộ`;
//   }
// }

// class SinhVien extends ConNguoi {
//   constructor(name, age, gender, mssv) {
//     super(name, age, gender);
//     this.mssv = mssv;
//   }
//   walk() {
//     return `MSSV: ${this.mssv}, ${super.walk()}`;
//   }
// }
// class SinhVien2 extends SinhVien {
//   constructor(name, age, gender, mssv, isGraduated) {
//     super(name, age, gender, mssv);
//     this.isGraduated = isGraduated;
//   }
// }
// const sv2 = new SinhVien("Ky", 20, "nam", "ABC123");
// const sv3 = new SinhVien2("Ky", 20, "nam", "ABC123", false);
// console.log(sv2);

// sayHi();
// var name = "Lydia";
// let age = 21;
// function sayHi() {
//   console.log(name);
//   console.log(age);
// }

// bai tap nho
// class Chameleon {
//   constructor(newColor) {
//     this.newColor = newColor;
//   }
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }
// }
// const freddie = new Chameleon("purple");
// console.log(Chameleon.colorChange("orange"));
// console.log(freddie);

// bind()
// let sinhVien = {
//   ten: "Ky",
//   getTen: function (tuoi, gioiTinh) {
//     console.log(this.ten + " " + tuoi + " " + gioiTinh);
//   }
// };
// let xe = {
//   ten: "Exciter"
// };
// const fn1 = sinhVien.getTen.bind(sinhVien);
// fn1(10, "nu");

// function inTen(cb) {
//   cb();
// }
// inTen(sinhVien.getTen.bind(xe));

// call();
// function f1() {
//   //...
//   console.log(this);
// }

// let xe = {
//   name: "Exciter",
//   brand: "Yamaha"
// };

// f1.call(xe);

// function f2(a, b) {
//   console.log(this);
//   return a + b;
// }

// const kq = f2.call(0, 10, 20);
// console.log(kq);

// function Hinh(chieuCao, chieuRong) {
//   this.chieuCao = chieuCao;
//   this.chieuRong = chieuRong;
// }

// function TuGiac(tongSoGocVuong, chieuCao, chieuRong) {
//   Hinh.call(this, chieuCao, chieuRong);
//   this.tongSoGocVuong = tongSoGocVuong;
// }

// let hinhVuong = new TuGiac(4, 100, 100);
// console.log(hinhVuong);

// const oto = {
//   ten: "Vinfast VF33",
//   khoiDong: function () {
//     console.log("Khởi động " + this.ten);
//   },
//   tangToc: function () {
//     console.log("Tăng tốc " + this.ten);
//   },
//   dungLai: function () {
//     console.log("Dừng " + this.ten);
//   }
// };

// const mayBay = {
//   ten: "Su-34",
//   bay: function () {
//     console.log("Đang bay");
//   }
// };
// oto.khoiDong.call(mayBay);

// apply()
// function f2(a, b, c, d) {
//   console.log(a, b, c, d);
//   return a + b;
// }

// f2.apply({}, [10, 20, 30, 40]);
// // console.log(kq);
