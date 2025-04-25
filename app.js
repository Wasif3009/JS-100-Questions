//JS 100 QUESTIONS
console.log("JS 100 QUESTIONS");
////////////////////////////////////////////////////////////////////////////////
//DAY 1
//1.JavaScript Program To Print Hello World
//METHOD 1
// console.log("HELLO WORLD BY METHOD 1");
//METHOD 2
// function printHello(str) {
//   return str;
// }
// console.log(printHello("HELLO WORLD BY METHOD 2"));
////////////////////////////////////////////////////////////////////////////////
//2.JavaScript Program to Add Two Numbers
//METHOD 1
// let a = 5;
// let b = 5;
// let c = a + b;
// console.log(`THE ADDITION IS ${c} BY METHOD 1`);
//METHOD 2
// function addTwoNums(x, y) {
//   return `THE ADDITION IS ${x + y} BY METHOD 2`;
// }
// console.log(addTwoNums(10, 5));
////////////////////////////////////////////////////////////////////////////////
//3.JavaScript Program to Find the Square Root
//METHOD 1
// let input = 5;
// let sqrRoot = input * input;
// console.log(`THE SQUARE ROOT IS ${sqrRoot} BY METHOD 1`);
//METHOD 2
// function sqrRootFunc(num) {
//   return `THE SQUARE ROOT IS ${num * num} BY METHOD 2`;
// }
//console.log(sqrRootFunc(10));
////////////////////////////////////////////////////////////////////////////////
//DAY 2
//4.JavaScript Program to Calculate the Area of a Triangle
//METHOD 1
// let base = 5;
// let height = 10;
// let area = (base * height) / 2;
// console.log(`AREA OF TRIANGLE IS ${area} BY METHOD 1`);
// //METHOD 2
// function areaOfTriangle(b, h) {
//   let answer = (b * h) / 2;
//   return `AREA OF TRIANGLE IS ${answer} BY METHOD 2`;
// }
// console.log(areaOfTriangle(10, 10));
////////////////////////////////////////////////////////////////////////////////
//5.JavaScript Program to Swap Two Variables
//METHOD 1

// let a = 2;
// let b = 5;
// console.log(`VALUE OF A BEFORE SWAPPING ${a}`);
// console.log(`VALUE OF B BEFORE SWAPPING ${b}`);
// let temp = a;//temp = 2
// a = b;// a = 5
// b = temp;//b = 2
// console.log(`VALUE OF A AFTER SWAPPING ${a}`);
// console.log(`VALUE OF B AFTER SWAPPING ${b}`);

//METHOD 2
// function swapping(x, y) {
//   let a = x;
//   let b = y;
//   console.log(`VALUE OF X BEFORE SWAPPING ${a}`);
//   console.log(`VALUE OF Y BEFORE SWAPPING ${b}`);
//   let temp = a;
//   let temp2 = b;
//   a = temp2;
//   b = temp;
//   console.log(`VALUE OF X AFTER SWAPPING ${a}`);
//   console.log(`VALUE OF Y AFTER SWAPPING ${b}`);
// }
// swapping(10, 20);
////////////////////////////////////////////////////////////////////////////////
//6.JavaScript Program to Solve Quadratic Equation
//METHOD 1
// let a = 2;
// let b = 4;
// let c = 1;
// let answer = -b + -(Math.sqrt(b * b - 4 * (a * c)) / 2) * a; //THIS IS FORMULA BASE QUESTION SO IT CAN VARY
// console.log(answer);
// // //METHOD 2
// function quadratic(num1, num2, num3) {
//   let x = num1;
//   let y = num2;
//   let z = num3;
//   let finalAnswer = -y + -(Math.sqrt(y * y - 4 * (x * z)) / 2) * x;
//   return finalAnswer;
// }
// console.log(quadratic(2, 4, 1));
////////////////////////////////////////////////////////////////////////////////
// DAY 3

//7. JavaScript Program to Convert Kilometers to Miles
//METHOD 1
// let Kilometers = 10;
// let miles = Kilometers / 1.609344;
// console.log(miles);
//METHOD 2
// function kiloToMiles(Kilometers) {
//   let miles = Kilometers / 1.609344;
//   return miles;
// }
// console.log(kiloToMiles(10));
////////////////////////////////////////////////////////////////////////////////

//8.Javascript Program to Convert Celsius to Fahrenheit
//METHOD 1
// let celsius = 5;
// let fahrenheitFormula = 9 / 5;
// let fahrenheit = celsius * fahrenheitFormula + 32;
// console.log(fahrenheit);
//METHOD 2
// function celsiusToFahrenheit(celsius) {
//   let celsiusInput = celsius;
//   let fahrenheitFormula = 9 / 5;
//   let fahrenheit = celsiusInput * fahrenheitFormula + 32;
//   return fahrenheit;
// }
// console.log(celsiusToFahrenheit(10));//50
// METHOD 3 - BEST WAY
// function cel(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// console.log(cel(10));
////////////////////////////////////////////////////////////////////////////////

// 9.Javascript Program to Generate a Random Number
//METHOD 1
// let randomNum = Math.floor(Math.random() * 20) + 1;
// console.log(randomNum); //GENERATES RANDOM NUMBER B/W 1 TO 20
//METHOD 2
// function randomNumber() {
//   return Math.floor(Math.random() * 20) + 1;
// }
// console.log(randomNumber());
////////////////////////////////////////////////////////////////////////////////
