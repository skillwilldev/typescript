// 4. მთავარი ფუნქცია, რომელიც ახდენს კონვერტაციას.
// ფუნქცია იღებს `ConversionInput` ტიპის ობიექტს და აბრუნებს `ConversionResult` ტიპის ობიექტს.
const convertTemperature = (input) => {
    // თუ გადაცემული ერთეული არის ცელსიუსი ("C")
    if (input.unit === "C") {
        return {
            originalValue: input.value, // საწყისი მნიშვნელობა (მაგ. 25)
            originalUnit: "C", // საწყისი ერთეული
            convertedValue: (input.value * 9) / 5 + 32, // ცელსიუსის ფარენჰაიტში გადაყვანის ფორმულა
            convertedUnit: "F" // ახალი ერთეული
        };
    }
    // თუ ერთეული არ არის "C" (ავტომატურად ნიშნავს, რომ არის "F")
    return {
        originalValue: input.value, // საწყისი მნიშვნელობა (მაგ. 77)
        originalUnit: "F", // საწყისი ერთეული
        convertedValue: ((input.value - 32) * 5) / 9, // ფარენჰაიტის ცელსიუსში გადაყვანის ფორმულა
        convertedUnit: "C" // ახალი ერთეული
    };
};
// ==========================================
// გამოყენების მაგალითები (Examples)
// ==========================================
// მაგალითი 1: გადაგვაქვს 25 გრადუსი ცელსიუსი ფარენჰაიტში
const celsiusToFahrenheit = convertTemperature({
    value: 25,
    unit: "C"
});
// მაგალითი 2: გადაგვაქვს 77 გრადუსი ფარენჰაიტი ცელსიუსში
const fahrenheitToCelsius = convertTemperature({
    value: 77,
    unit: "F"
});
// მიღებული შედეგების ბეჭდვა კონსოლში
console.log(celsiusToFahrenheit); // დაბეჭდავს ობიექტს 77 გრადუსი F-ით
console.log(fahrenheitToCelsius); // დაბეჭდავს ობიექტს 25 გრადუსი C-ით
export {};
