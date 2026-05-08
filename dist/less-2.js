"use strict";
// // npm i -g typescript ან (Mac) sudo npm i -g typescript
// // შევქმნათ tsconfig.json ფაილი ჩვენს სამუშაო Folder-ში
// // {
// //     "compilerOptions": {
// //         "target": "ES6", - რა მოდულში და რა ვერსიაში მუშაობთ
// //         "module": "ES6",
// //         "rootDir": "./src",
// //         "outDir": "./js",
// //         "strict": false,
// //         "sourceMap": true
// //     },
// //     "include": ["src"]
// // }
// // ვქმნით ჩვენს სამუშაო Folder-ში src Folder-ს და მოცემულ Folder-ში ქმნით typescript ფაილს ნებისმიერი სახელით და .ts დაბოლოებით. 
// // ვქმნით ჩვენს სამუშაო Folder-ში ვქმნით index.html-ს მისი საწყისი კოდით.
// // ვუშვებთ tsc --watch ბრძანებას. იქმენება Folder სახელად js და მის შიგნით ორი ფაილი "ფაილი ნებისმიერი სახელით.js" და .map ფაილი.
// // შეგვიძლია შევქმნათ style ფოლდერი მისი css ფაილით. 
// // დავაკავშიროთ ფაილები. მაგალითად:    
// // <link rel="stylesheet" href="./style/style.css">  
// // <script src="./js/typescript.js"></script>
// // სრული მაგალითი 
// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// //     <link rel="stylesheet" href="./style/style.css">
// // </head>
// // <body>
// //     <script src="./js/typescript.js"></script>
// // </body>
// // </html>
// function hello(): boolean | number {
//     let a = 5;
//     return a;
// }
// let b: boolean | number = hello();
// ///////////// void function
// function hello1(): void {
//     let a = 5;
//     console.log(a);
// }
// let b1: any = hello1();
// ////////////////tuples//////////////
// const arr: [number, string?, number?] = [10, '15', 20];
// console.log(arr[0]);
// //let mtup: readonly [string, string, string?, number?] = ["", ""];
// const arr2: ReadonlyArray<string> = ['h', 'p', '2'];
// console.log(arr2[0]);
