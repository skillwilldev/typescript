function hello(): boolean | number {
    let a = 5;
    return a;
}
let b: boolean | number = hello();

///////////// void function
function hello1(): void {
    let a = 5;
    console.log(a);
}
let b1: any = hello1();
////////////////tuples//////////////
const arr: [number, string?, number?] = [10, '15', 20];
console.log(arr[0]);

let mtup: readonly [string, string, string?, number?] = ["", ""];

const arr2: ReadonlyArray<string> = ['h', 'p', '2'];
console.log(arr2[0]);