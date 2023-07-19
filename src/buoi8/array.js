import "./baitap_array";
/**
 * Làm việc với mảng nâng cao trong JavaScript
 *
 * 1. forEach()
 * 2. every()
 * 3. some()
 * 4. find()
 * 5. filter()
 * 6. map()
 * 7. reduce()
 * 8. Cạm bẫy với shallow copy
 * 8. Bài tập giải trí:
 * Tại SEA GAMES 32 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng
 * tổng sắp huy chương. Hãy tạo hàm getTotalGoldMedal có 1 tham số là mảng.
 * Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được
 * trong kỳ SEA Game lần này.
 */
const products = [
  {
    id: "001",
    name: "Product 1",
    description: "Description of Product 1",
    price: 19.99,
    quantity: 10
  },
  {
    id: "002",
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    quantity: 5
  },
  {
    id: "003",
    name: "Product 3",
    description: "Description of Product 3",
    price: 9.99,
    quantity: 0
  },
  {
    id: "004",
    name: "Product 4",
    description: "Description of Product 4",
    price: 49.99,
    quantity: 15
  },
  {
    id: "005",
    name: "Product 5",
    description: "Description of Product 5",
    price: 14.99,
    quantity: 8
  }
];
// fn = function

// function handleData(item, index, originalArray) {
//   // console.log(item, index, originalArray);
// }
// const a3 = products.forEach(handleData);
// console.log(a3);

// const b3 = products.every(function (item, index, originalArray) {
//   return item.quantity >= 1;
// });
// console.log(b3);

// const b4 = products.some(function (item, index, originalArray) {
//   console.log(index);

//   return item.quantity > 15;
// });
// console.log(b4);

// const b5 = products.filter(function (item, index, originalArray) {
//   return item.quantity >= 16;
// });
// console.log(b5);

// const b6 = products.map(function (item, index, originalArray) {
//   return `<div><span>${item.name}</span></div>`;
// });
// console.log(b6);

// // Khoi tao bien tich tru a
// let a = 0;
// // Lap qua cac phan tu cua mang products
// for (item of products) {
//   // gan a = a + item.quantity -> tang gia tri bien tich tru
//   a += item.quantity;
// }
// console.log(a);

// const totalQuantity = products.reduce(function (
//   acc,
//   curr,
//   index,
//   originalArray
// ) {
//   return (acc += curr.quantity);
// },
// 0);

// console.log(totalQuantity);

// 8. Cạm bẫy...
// const b8 = products.find(function (item, index, originalArray) {
//   return item.quantity >= 10;
// });
// b8.name = "San pham 1";
// console.log(products);

// const goldMedals = [
//   { id: "1", name: "Bơi", gold: 7 },
//   { id: "2", name: "Boxing", gold: 2 },
//   { id: "3", name: "Đạp xe", gold: 1 },
//   { id: "4", name: "Đấu kiếm", gold: 4 },
// ];

// function getTotalGoldMedal(arr) {
//   // do something here
//   if (Array.isArray(arr)) {
//     return arr.reduce(function (acc, curr) {
//       return (acc += curr.gold);
//     }, 0);
//   } else {
//     console.log("Truyen vao khong phai la array");
//     return null;
//   }
// }
// console.log(getTotalGoldMedal("goldMedals")); // Output: 14
