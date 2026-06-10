function highAndLow(numbers: string): string {
    const max: number = Math.max(...numbers.split(' ').map(Number));
    const min: number = Math.min(...numbers.split(' ').map(Number));
    return `${max} ${min}`;
};


const digitalRoot = (n: number): number => {
    if (n < 10) return n;
    const sum = n.toString().split("").reduce((acc, curr) => acc + Number(curr), 0);
    return digitalRoot(sum);
};


// String.prototype.toJadenCase = function () {
//   return this.split(' ').map((item) => {
//     return item[0].toUpperCase() + item.slice(1);
//   }).join(' ');
// }


// interface String {      // Declaration needed, don't remove it
//   toJadenCase(): string;
// }