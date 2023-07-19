// // Cách cũ
// function multiply2(a, b) {
//   return a * b;
// }

// const multiply = (a) => {
//   return (b) => {
//     return a * b;
//   };
// };
// // Sử dụng
// console.log(multiply(2)(6));
// // console.log(multiplyByTwo(6)); // Kết quả: 8

// console.log(multiply(5)(3));
// // console.log(multiplyByFive(3)); // Kết quả: 15

// Bài tập số 1
// const filterArray = (cb) => {
//   return (arr) => {
//     if (Array.isArray(arr)) {
//       return arr.filter(cb);
//     }
//     return "Đây không phải array hợp lệ";
//   };
// };

// const result = filterArray((num) => num > 5)([1, 6, 2, 8, 3]);
// console.log(result);

// Bài tập số 2
// function createLogger(logType) {
//   return function (message) {
//     console.log(`[${logType.toUpperCase()}]: ${message}`);
//   };
// }
// const errorLogger = createLogger("error");
// errorLogger("Something went wrong");
