// Bài 1:
// function calculate(operation) {
//   return function(a, b) {
//     switch (operation) {
//       case 'add':
//         return a + b;
//       case 'subtract':
//         return a - b;
//       case 'multiply':
//         return a * b;
//       case 'divide':
//         return a / b;
//       default:
//         return NaN;
//     }
//   };
// }

// // Sử dụng currying function để thực hiện phép tính
// const addResult = calculate('add')(5, 3); // Kết quả: 8
// const subtractResult = calculate('subtract')(10, 6); // Kết quả: 4
// const multiplyResult = calculate('multiply')(4, 5); // Kết quả: 20
// const divideResult = calculate('divide')(15, 3); // Kết quả: 5

// Bài 2:
// function* randomSequence(n) {
//   for (let i = 0; i < n; i++) {
//     yield Math.floor(Math.random() * 101);
//   }
// }

// const sequenceLength = 5;
// const sequenceGenerator = randomSequence(sequenceLength);

// for (const value of sequenceGenerator) {
//   console.log(value);
// }

// for (let i = 0; i < sequenceLength; i++) {
//   console.log(sequenceGenerator.next().value);
// }