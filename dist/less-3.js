"use strict";
// // number
// let age: number = 27; // int - მთელი რიცხვი
// let price: number = 99.99; // float - ათწილადი,
// let bigNumber: bigint = 213421342313412342134234n; // bigint
// let city: string = "Batumi";
// let saxeli: string = "kakhi";
// let isOnline: boolean = true;
// let isLoggedIn: boolean = false;
// let ricxvi: number = 20;
// let message: boolean = ricxvi >= 10 ? true : false;
// let data: any = "Hello World";
// console.log(data.toUpperCase());
// let dater: string = "";
// let mydata: unknown = 5;
// if (mydata === "string") {
//   dater = mydata;
// } else if (mydata === "number") {
//   dater = mydata;
// }
// let x: null = null;
// let y: undefined = undefined;
// //union type
// let phone: undefined | number = undefined;
// console.log(typeof phone);
// console.log(typeof Number(phone)); // not a number - number-ის ტიპს მიეკუთვნება Number("5a") -> NaN
// let grade: null | string = prompt("შემოიტანე რიცხვი");
// if (grade === null) {
//   console.log("you must input something");
// } else if (typeof grade === "string") {
//   console.log("You must input number, not a string");
// } else {
//   let myGrade = Number(grade);
//   if (myGrade >= 90 && myGrade <= 100) {
//     if (myGrade >= 98) {
//       console.log("A+");
//     } else if (myGrade <= 92) {
//       console.log("A-");
//     } else {
//       console.log("A");
//     }
//   } else if (myGrade >= 80 && myGrade < 90) {
//     if (myGrade >= 87) {
//       console.log("B+");
//     } else if (myGrade <= 82) {
//       console.log("B-");
//     } else {
//       console.log("B");
//     }
//   } else if (myGrade >= 70 && myGrade < 80) {
//     if (myGrade >= 77) {
//       console.log("C+");
//     } else if (myGrade <= 72) {
//       console.log("C-");
//     } else {
//       console.log("C");
//     }
//   } else if (myGrade >= 60 && myGrade < 70) {
//     if (myGrade >= 67) {
//       console.log("D+");
//     } else {
//       console.log("D");
//     }
//   } else if (myGrade >= 0 && myGrade < 60) {
//     console.log("F");
//   } else {
//     console.error("input number between 0-100");
//   }
// }
