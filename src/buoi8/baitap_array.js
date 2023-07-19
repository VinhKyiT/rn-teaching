// Bài 1:
const goldMedals = [
  { id: "1", name: "Bơi", gold: 7 },
  { id: "2", name: "Boxing", gold: 2 },
  { id: "3", name: "Đạp xe", gold: 1 },
  { id: "4", name: "Đấu kiếm", gold: 4 }
];

function getTotalGoldMedal(arr) {
  // do something here
  if (Array.isArray(arr)) {
    return arr.reduce(function (acc, curr) {
      return (acc += curr.gold);
    }, 0);
  } else {
    console.log("Truyen vao khong phai la array");
    return []
  }
}
console.log(getTotalGoldMedal("goldMedals")); // Output: 14

// Bài 2:
// let arr = [
//   ["name", "Ky Bui"],
//   ["age", 18]
// ];
// const arrToObj = (arr) => {
//   // do something here
// };
// console.log(arrToObj(arr)); // Output: { name: 'Ky Bui', age: 18 } -> Tham khao them bai nay
