// THAM TRỊ vs THAM CHIẾU trong Javascript

// CHIA SẺ
// 1. Tham trị vs tham chiếu là gì?
// 2. Các khái niệm:
//     - stored by value
//     - stored by reference
//     - pass by value
//     - pass by reference
// 3. Cách khắc phục lỗi liên quan tới reference

// -----------------
// THAM TRỊ - VALUE TYPE
// - Ví dụ cái box sau đây là đại diện cho biến trong JS.

// |------------------|
// | number           |
// | string           |  => lưu luôn giá trị
// | boolean          |     vd số 1000, string 'Nestech App'
// | null, undefined  |
// |__________________|

// const a = 'Nestech App';
// |------------------|
// | 1000             |
// | 'Nestech App'    |
// | true, false      |
// | null, undefined  |
// |__________________|

// -----------------
// THAM CHIẾU - REFERENCE TYPE

// |                         |    ===>    | KHO CHỨA #001  |
// | object, array           |    ===>    |                |
// |                         |    ===>    | {name: 'Ky'}   |
// | const a = {name: 'Ky'}  |    ===>    |                |
// | thực chất a = #001      |    ===>    |                |
// |_________________________|    ===>    |________________|
// => chỉ lưu địa chỉ nơi giữ giá trị
// => phép gán với object đồng nghĩa với việc copy địa chỉ
// const b = a; --> b cũng trỏ về địa chỉ #001

// tham trị - stored as value type
// let a = 5;
// let b = a;
// a = 10;
// console.log(b);

// tham chiếu - stored as reference type
// const a = { name: "Ky" }; // #001
// const b = a; // #001
// a.name = "Po";
// a.age = 30;
// console.log(b);

// truyền tham số dạng tham trị - pass by value
// function doMagic1(number) {
//   number = 10;
// }
// const a = 5;
// doMagic1(a);
// console.log(a); // 5 or 10

// truyền tham số dạng tham chiếu - pass by reference
// function doMagic2(a1) {
//   // const a1 = a; // #001
//   a1.name = "Po";
// }
// const a = { name: "Ky" }; // #001
// doMagic2(a);
// console.log(a.name); // Ky or Po???

// Làm sao để không bị dính tham chiếu
// --> Clone object
// --> Clone array
// ES6: spread operator (...)
// const a = {
//   name: "Ky",
//   age: 20,
//   gender: "male",
//   getName: function () {
//     console.log("Toi la Ky");
//   }
// }; // #001
// const b = { ...a }; // #002
// a.name = "Po";
// console.log(b);

// const a = [1, 2, 3]; //#003
// const b = [...a]; //#004
// a.push(4);
// console.log(b[0]);

// BÀI TẬP GIẢI TRÍ
// Câu 1:
// function f1(num, obj) {
//   num = 1500;
//   obj.value = 2500; // #005
// }
// const a = 1000;
// const b = { value: 2000 }; // #005
// f1(a, b);
// console.log(a + b.value); // in ra bao nhiêu?

// Câu 2:
// function f2(obj, arr) {
//   obj.value = 3500;
//   arr.push(obj.value);
// }
// const a = { value: 1500 };
// const b = [1000];
// b.push(a.value);
// f2(a, b);
// console.log(b); // in ra cái gì?
