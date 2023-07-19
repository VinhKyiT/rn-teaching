// const myArray = [1, 2, 3];
// const iterator = myArray[Symbol.iterator]();

// console.log(iterator.next().done); // { value: 1, done: false }
// console.log(iterator.next().value); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// Câu lệnh sau sẽ in ra gì
// console.log(myArray[Symbol.iterator]().next());
// console.log(myArray[Symbol.iterator]().next());

// Bài tập: Viết 1 cái ỉterator riêng cho mình, sẽ lần lượt trả về
// value là các số tăng dần và bắt đầu bằng số 1 và kết thúc bằng 5

// const numberIterator = {
//   currentValue: 0,
//   next() {
//     this.currentValue++;
//     if (this.currentValue > 5) {
//       return {
//         value: undefined,
//         done: true
//       };
//     }
//     return {
//       value: this.currentValue,
//       done: false
//     };
//   }
// };
// console.log(numberIterator.next()); // { value: 1, done: false }
// console.log(numberIterator.next()); // { value: 2, done: false }
// console.log(numberIterator.next()); // { value: 3, done: false }
// console.log(numberIterator.next()); // { value: 4, done: false }
// console.log(numberIterator.next()); // { value: 5, done: false }
// console.log(numberIterator.next()); // { value: 6, done: false }
