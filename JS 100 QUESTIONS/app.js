//JS 100 QUESTIONS
console.log("JS 100 QUESTIONS");
////////////////////////////////////////////////////////////////////////////////
//1.JavaScript Program To Print Hello World
//METHOD 1
console.log("HELLO WORLD BY METHOD 1");
//METHOD 2
function printHello(str) {
  return str;
}
console.log(printHello("HELLO WORLD BY METHOD 2"));
////////////////////////////////////////////////////////////////////////////////
//2.JavaScript Program to Add Two Numbers
//METHOD 1
let a = 5;
let b = 5;
let c = a + b;
console.log(`THE ADDITION IS ${c} BY METHOD 1`);
//METHOD 2
function addTwoNums(x, y) {
  return `THE ADDITION IS ${x + y} BY METHOD 2`;
}
console.log(addTwoNums(10, 5));
////////////////////////////////////////////////////////////////////////////////
//3.JavaScript Program to Find the Square Root
//METHOD 1
let input = 5;
let sqrRoot = input * input;
console.log(`THE SQUARE ROOT IS ${sqrRoot} BY METHOD 1`);
//METHOD 2
function sqrRootFunc(num) {
  return `THE SQUARE ROOT IS ${num * num} BY METHOD 2`;
}
console.log(sqrRootFunc(10));
////////////////////////////////////////////////////////////////////////////////
