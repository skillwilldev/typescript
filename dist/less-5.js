"use strict";
// let nums: number[] = [1];
// let names: string[] = ["Hello World"];
// let tt: boolean[] = [true, false];
// // თუ ვქმნით მასივს აუცილებელია რომ ცვლადის იდენტიფიკატორს გავუკეთოთ [] ხოლო თვითონ ცვლადი 
// // ჩავწეროთ ასევე [ამ ფრჩხილების შუაში] 
// // არ შეიძლება სხვა ტიპების გამოყენება გარდა ფრჩხილებში არსებული ტიპებისა
// // union type array
// let person: (number | string)[] = []
// //tuples - განსაზღვრული მასივი
// let myTuple: [number, number, string] = [1, 2, ""]
// // myTuple.pop(); უკნიდან წაშლა
// // myTuple.push("4"); უკნიდან დამატება
// // myTuple.shift(); წინიდან წაშლა
// // myTuple.unshift("3"); წინიდან დამატება
// // myTuple = [5,2,"2"]
// myTuple.push("hello")
// myTuple.unshift("7")
// console.log(typeof myTuple[0])
// // აუცილებლად უნდა იყოს განსაზღვრული [აქ წერ რა ტიპ(ებ)ის იქნება ელემენტი] აუცილებლად იმავე რაოდენობის უნდა შემოვიტანოთ
// // თანმიმდევრობა დაცული უნდა იყოს
// console.log(myTuple)
// // function tupleFunc(): [number, string]{
// //     return [2, ""];
// // }
// // function tupleFunc(): (number | string)[]{
// //     return [2,""];
// // }
// //strict tuples
// let mtup: readonly [string, string, string?, number?] = ["", ""]
// // mtup.push(2)
// // mtup[0] = 5
// // mtup.add
// let mstr: ReadonlyArray<string | number> = ["h", "p", 2];
// //მოქმედება რომლის დროსაც მასივს ვერ ცვლით. ეს მოქმედება არის უნიკალური იმით რომ ის რაოდენობრივად გვზღუდავს
// console.log(typeof mstr[2])
// function showProducts(products: readonly string[]): readonly string[] {
//     return products;
// }
// showProducts([])
// let myset = new Set([1, 5, 1, 2, 3, 3, 3, 3, 4, 7, 7, 8, 1, 2, 3, 3, 3, 4])
// console.log(myset)
// function triangle(a: number, b: number = 20): number {
//     let j = a + b;
//    // let tmp = 5;
//     return j;
// }
// let x = Number(prompt("შემოიტანე a"))
// let y = Number(prompt("შემოიტანე b"))
// let z = Number(prompt("შემოიტანე c"))
// console.log(triangle(5, 10));
