// // Tạo một biến valueVar và gán giá trị số (ví dụ: 10) cho biến này.
// let valueVar = 10;
// // Tạo một biến referenceVar và gán một mảng (ví dụ: [1, 2, 3]) cho biến này.
// let referenceVar = [1, 2, 3, 4];
// // Viết một hàm có tên updateValue, nhận một tham số value và cập nhật giá trị của tham số này thành 20.
// function updateValue(value) {
//   value = 20;
// }
// // Gọi hàm updateValue với đối số là valueVar.
// updateValue(valueVar);
// // In ra giá trị của valueVar. Bạn dự đoán kết quả in ra sẽ là gì? Tại sao?
// // console.log(valueVar);
// // Viết một hàm khác có tên updateArray, nhận một tham số array và cập nhật phần tử đầu tiên của mảng thành 10.
// function updateArray(arr) {
//   console.log(arr === referenceVar); // đang trỏ về cùng 1 địa chỉ ô nhớ

//   arr[0] = 10;
// }
// // Gọi hàm updateArray với đối số là referenceVar.
// updateArray(referenceVar);
// // In ra giá trị của referenceVar. Bạn dự đoán kết quả in ra sẽ là gì? Tại sao?
// console.log(referenceVar);

// Tạo một mảng gồm các số nguyên: [1, 2, 3, 4, 5].
let arr1 = [1, 2, 3, 4, 5];
// Sử dụng phương pháp forEach để in ra mỗi phần tử trong mảng.
// arr1.forEach(function (num, index, originalArray) {
//   console.log(num);
// });
// Sử dụng phương pháp find để tìm phần tử đầu tiên trong mảng có giá trị lớn hơn 3.
// const element = arr1.find(function (num, index) {
//   console.log(index);

//   return num > 3;
// });
// console.log(element);

// Sử dụng phương pháp some để kiểm tra xem trong mảng có phần tử nào lớn hơn 5 hay không.
// const element = arr1.some((num) => {
//   return num > 3;
// });
// console.log(element);

// Sử dụng phương pháp every để kiểm tra xem có phải tất cả phần tử trong mảng đều là số nguyên hay không. (sử dụng Number.isNumber)
// const element = arr1.every((item) => {
//   return Number.isInteger(item);
// });
// console.log(element);

// Sử dụng phương pháp map để tạo một mảng mới, trong đó mỗi phần tử là bình phương của phần tử tương ứng trong mảng gốc. (dùng toán tử **)
// const newArr = arr1.map((num) => num ** 2);
// const newArr1 = arr1.map(function (num) {
//   return num ** 2;
// });
// console.log(newArr);
// console.log(newArr1);

// Sử dụng phương pháp reduce để tính tổng các phần tử trong mảng.
// const sum = arr1.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// Bài 3
// let arr = [
//   ["name", "Ky Bui"],
//   ["age", 18]
// ];
// const arrToObj = (arr) => {
//   // do something here
//   if (Array.isArray(arr) && arr.length > 0) {
//     return arr.reduce((acc, curr) => {
//       return Object.assign(acc, { [curr[0]]: curr[1] });
//     }, {});
//   }
// };
// console.log(arrToObj(arr));
