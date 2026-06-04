"use strict";
function calculateBMI(weight, height) {
    const bmi = parseFloat((weight / (height * height)).toFixed(1));
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi <= 24.9) {
        category = "Normal weight";
    }
    else if (bmi <= 29.9) {
        category = "Overweight";
    }
    else if (bmi <= 34.9) {
        category = "Obesity (Class I)";
    }
    else if (bmi <= 39.9) {
        category = "Obesity (Class II)";
    }
    else {
        category = "Obesity (Class III)";
    }
    return { bmi, category };
}
const myWeight = 75;
const myHeight = 1.75;
const result = calculateBMI(myWeight, myHeight);
console.log(`Weight: ${myWeight} kg`);
console.log(`Height: ${myHeight} m`);
console.log(`BMI: ${result.bmi}`);
console.log(`Category: ${result.category}`);
