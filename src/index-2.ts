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