// let sinhVien = {
//   name: "Ky Bui",
//   age: 30,
//   averageScore: 8.5,
//   objCon: {
//     own: "Day la obj con cua sinhVien",
//     getAge: function () {
//       const c = () => {
//         console.log(this);
//       };
//       c();
//     }
//   },
//   inThongTinSinhVien: function () {
//     return `Ban ${this.name} co so diem la ${this.averageScore}`;
//   }
// };
// sinhVien.objCon.getAge();

// // function Car(name, brand, color) {
// //   this.name = name;
// //   this.brand = brand;
// //   this.color = color;
// // }

// // Car.prototype.openDoor = function () {
// //   return `Đang mở cửa chiếc ${this.name} màu ${this.color} của hãng ${this.brand}`;
// // };

// // const car1 = new Car("S450", "Mercesdes", "black");
// // const car2 = new Car("Aventador", "Lamborghini", "yellow");
// // console.log(car1.openDoor());
// // const moCuaChiecS450 = car1.openDoor;
// // console.log(moCuaChiecS450());

// // console.log(car2);

// function f2() {
//   console.log(this);
// }
// f2();
