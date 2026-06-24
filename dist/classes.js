// // class Student {
// //   name: string;
// //   age: number;
// //   id: string;
// //   faculty: string;
// //   status: string;
export {};
// //   constructor(
// //     name: string,
// //     age: number,
// //     id: string,
// //     faculty: string,
// //     status: string,
// //   ) {
// //     this.Name = name;
// //     this.name = name;
// //     this.Age = age;
// //     this.Id = id;
// //     this.Faculty = faculty;
// //     this.Status = status;
// //   }
// //   set Name(name: string) {
// //     this.name = name;
// //   }
// //   set Age(age: number) {
// //     this.age = age;
// //   }
// //   set Id(id: string) {
// //     if (id.length === 11) {
// //       this.id = id;
// //     } else {
// //       this.id = "Invalid ID";
// //     }
// //   }
// //   set Faculty(faculty: string) {
// //     this.faculty = faculty;
// //   }
// //   set Status(status: string) {
// //     this.status = status;
// //   }
// //   get Name() {
// //     return this.name;
// //   }
// //   get Age() {
// //     return this.age;
// //   }
// //   get Id() {
// //     return this.id;
// //   }
// //   get Faculty() {
// //     return this.faculty;
// //   }
// //   get Status() {
// //     return this.status;
// //   }
// // }
// // class Teacher {
// //   name: string;
// //   age: number;
// //   id: string;
// //   field: string;
// //   status: string;
// //   constructor(
// //     name: string,
// //     age: number,
// //     id: string,
// //     field: string,
// //     status: string,
// //   ) {
// //     this.Name = name;
// //     this.name = name;
// //     this.Age = age;
// //     this.Id = id;
// //     this.Field = field;
// //     this.Status = status;
// //   }
// //   set Name(name: string) {
// //     this.name = name;
// //   }
// //   set Age(age: number) {
// //     this.age = age;
// //   }
// //   set Id(id: string) {
// //     if (id.length === 11) {
// //       this.id = id;
// //     } else {
// //       this.id = "Invalid ID";
// //     }
// //   }
// //   set Field(field: string) {
// //     this.field = field;
// //   }
// //   set Status(status: string) {
// //     this.status = status;
// //   }
// //   get Name() {
// //     return this.name;
// //   }
// //   get Age() {
// //     return this.age;
// //   }
// //   get Id() {
// //     return this.id;
// //   }
// //   get Field() {
// //     return this.field;
// //   }
// //   get Status() {
// //     return this.status;
// //   }
// // }
// // Inheritance - მემკვიდრეობა
// // Protected - ხედავს მოცემული კლასი და მისი მემკვიდრე (შვილი კლასი)
// class Person {
//   protected name: string;
//   protected age: number;
//   protected id: string;
//   protected status: string;
//   constructor(name: string, age: number, id: string, status: string) {
//     this.Name = name;
//     this.Age = age;
//     this.Id = id;
//     this.Status = status;
//   }
//   set Name(name: string) {
//     this.name = name;
//   }
//   set Age(age: number) {
//     this.age = age;
//   }
//   set Id(id: string) {
//     if (id.length === 11) {
//       this.id = id;
//     } else {
//       this.id = "Invalid ID";
//     }
//   }
//   set Status(status: string) {
//     this.status = status;
//   }
//   get Name() {
//     return this.name;
//   }
//   get Age() {
//     return this.age;
//   }
//   get Id() {
//     return this.id;
//   }
//   get Status() {
//     return this.status;
//   }
//   getInfo(): void{
//     console.log(`${this.name} - is very good ${this.status}`)
//   }
// }
// class Student extends Person {
//   private faculty: string;
//   constructor(
//     name: string,
//     age: number,
//     id: string,
//     status: string,
//   ) {
//     super(name, age, id, status);
//     this.Faculty = faculty;
//   }
//   set Faculty(faculty: string) {
//     this.faculty = faculty;
//   }
//   get Faculty() {
//     return this.faculty;
//   }
//   getInfo(): void{
//     console.log(`${this.name} -- is very good ${this.faculty}`)
//   }
// }
// class Teacher extends Person {
//   private field: string;
//   constructor(
//     name: string,
//     age: number,
//     id: string,
//     status: string,
//     field: string,
//   ) {
//     super(name, age, id, status);
//     this.Field = field;
//   }
//   // overridding - გადატვირთვის პროცესი
//   set Id(id: string) {
//     if (id.length === 9) this.id = id;
//   }
//   set Field(field: string) {
//     this.field = field;
//   }
//   get Field() {
//     return this.field;
//   }
//   get Id(){
//     return this.id;
//   }
//   // პოლიმორფიზმი
//   getInfo(): void{
//     console.log(`${this.id} -+- is very good ${this.field}`)
//   }
// }
// // ეგზემპლარი
// const stu = new Teacher("kevin", 0, "123456789", "", "computer science");
// console.log(stu.Id)
