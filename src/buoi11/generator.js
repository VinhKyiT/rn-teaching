// function* myGenerator() {
//   console.log("Chạy lần 1");
//   yield 10;
//   console.log("Chạy lần 2");
//   yield "2";
//   console.log("Chạy lần 3");
//   yield 3;
//   console.log("Chạy lần 4");
// }

// let generator = myGenerator();

// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 2, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: undefined, done: true }

// function* naturalNumbers() {
//   let number = 1;
//   while (number <= 5) {
//     yield number;
//     number++;
//   }
// }

// let generator = naturalNumbers();

// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 2, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: 3, done: false }

// function* generateFibonacci() {
//   let prev = 0;
//   let curr = 1;
//   while (true) {
//     if (prev === 0) yield prev;

//     yield curr;
//     // Tính toán số tiếp theo
//     // const next = prev + curr;
//     // prev = curr;
//     // curr = next;
//     [prev, curr] = [curr, prev + curr];
//   }
// }
// const fibo = generateFibonacci();
// console.log(fibo.next()); // { value: 0, done: false}
// console.log(fibo.next()); // { value: 1, done: false}
// console.log(fibo.next()); // { value: 1, done: false}
// console.log(fibo.next()); // { value: 2, done: false}
// console.log(fibo.next()); // { value: 3, done: false}
// console.log(fibo.next());
// console.log(fibo.next());
// console.log(fibo.next());
// console.log(fibo.next());
// console.log(fibo.next());

// let a = "xyz",
//   b;
// [a, b] = ["abc", a + "def"];

// console.log(a);
// console.log(b);
