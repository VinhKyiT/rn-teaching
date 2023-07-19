// class StudentList {
//   constructor() {
//     this.students = [];
//   }

//   addStudent(student) {
//     this.students.push(student);
//   }

//   removeStudent(student) {
//     this.students = this.students.filter((item) => {
//       return item.id !== student.id;
//     });
//   }

//   displayStudents() {
//     console.log(this.students);
//     this.students.forEach((student) => {
//       console.log(`Tên: ${student.name}, Tuổi: ${student.age}`);
//     });
//   }
// }

// // Sử dụng lớp StudentList
// const studentList = new StudentList();
// const student1 = {
//   id: 1,
//   name: "Kỳ Bùi",
//   age: 25
// };
// const student2 = {
//   id: 2,
//   name: "Đình Thọ",
//   age: 28
// };
// studentList.addStudent(student1);
// studentList.addStudent(student2);
// // studentList.displayStudents();

// studentList.removeStudent(student2);
// // studentList.displayStudents();
// const displayStudents = studentList.displayStudents.bind(studentList);
// displayStudents();
