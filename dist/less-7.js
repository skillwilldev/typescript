// enum, interface vs type
const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const dog = {
    name: "jeka",
    breed: "kokespanieli",
    legs: 4
};
console.log(minus(5, 6));
// as <> conversion parse -> as as
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "#FF4D4D";
    TrafficLight["Yellow"] = "#FFD700";
    TrafficLight["Green"] = "#2ECC71";
})(TrafficLight || (TrafficLight = {}));
const traffic = TrafficLight.Red;
console.log(traffic);
export {};
