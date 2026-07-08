import calculator from "./test.js";
console.log(calculator(10, 10));



function sumPairs(ints, s) {
    let tmp = [];
    for (let i = 0; i < ints.length; i++) {
        const a = ints[i];
        for (let j = 0; j < ints.length; j++) {
            const b = ints[j];
            if (i !== j) {
                let res = a + b;
                if (res === s) {
                    tmp.push([i, j]);
                }
            }
        }
    }

    console.log(tmp);
    console.log('#######');
    return tmp.map((item) => {
        
    })

    // sort((a, b) => {
    //     return a[1] - b[1];
    // });
}

console.log(sumPairs([4, 3, 2, 3, 4], 6));