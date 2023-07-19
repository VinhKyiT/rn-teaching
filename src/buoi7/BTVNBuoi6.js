// Bài 1:
// let a = 15;
// let b = [];

// for (let i = 0; i < a; i++) {
//   // Tạo số ngẫu nhiên có hai chữ số
//   let randomNumber = Math.floor(Math.random() * 90 + 10);

//   // Thêm số vào mảng b
//   b.push(randomNumber);
// }

// console.log(b);

// Bài 2.
// function timSoLonNhat(num1, num2, num3) {
//   if (num1 >= num2 && num1 >= num3) {
//     return num1;
//   } else if (num2 >= num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }
// let a = 10;
// let b = 52;
// let c = 80;

// let max = timSoLonNhat(a, b, c);
// console.log(max);

// // Bài 3.
// const inSoChan = (arr) => {
//   arr.forEach((num) => {
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//   });
// };
// let numbers = [10, 22, 11, 9, 3, 66, 52, 30, 21, 42];
// inSoChan(numbers);

// Bài 3 của Hanh:
// let mang = [10, 22, 11, 9, 3, 66, 52, 30, 21, 42];
// let inSoChan = (mang) => {
//   for (let i = 0; i <= mang.length - 1; i++) {
//     if (mang[i] % 2 === 0) {
//       console.log(mang[i]);
//     }
//   }
// };
// inSoChan(mang);
