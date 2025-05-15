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
//DAY 4

// 10.JavaScript Program to Find the Largest Among Three Numbers
//METHOD 1
// let num1 = 50;
// let num2 = 20;
// let num3 = 110;
// if (num1 > num2 && num1 > num3) {
//   console.log(num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log(num2);
// } else if (num3 > num1 && num3 > num2) {
//   console.log(num3);
// }

//METHOD 2
// function largestNum(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else if (c > a && c > b) {
//     return c;
//   }
// }
// console.log(largestNum(10, 20, 30));
////////////////////////////////////////////////////////////////////////////////
// 11.Javascript Program to Check if a Number is Odd or Even
//METHOD 1
// let num =   3;
// if (num % 2 === 0) {
//   console.log("THIS NUMBER IS EVEN");
// } else {
//   console.log("THIS NUMBER IS ODD");//ODD
// }

//METHOD 2
// function evenOddCheck(num) {
//   if (num % 2 === 0) {
//     return "THIS IS EVEN";
//   } else {
//     return "THIS NUMBER IS ODD";
//   }
// }
// console.log(evenOddCheck(100));//EVEN
////////////////////////////////////////////////////////////////////////////////
// 12.Javascript Program to Check if a number is Positive, Negative, or Zero

//METHOD 1

// let num = -100;
// if (num > 0) {
//   console.log("NUM IS POSITIVE");
// } else if (num === 0) {
//   console.log("NUM IS ZERO");
// } else if (num < 0) {
//   console.log("NUM IS NEGATIVE");
// }

//METHOD 2

// function numChecker(num) {
//   if (num > 0) {
//     return "POSITIVE";
//   } else if (num === 0) {
//     return "ZERO";
//   } else if (num < 0) {
//     return "NEGATIVE";
//   }
// }
// console.log(numChecker(-10));//NEGATIVE
////////////////////////////////////////////////////////////////////////////////
//13.JavaScript Program to Check Prime Number

//METHOD 1
// function prime(num) {
//   let isPrime = false;
//   if (num === 0) {
//     return "0 Is not a prime";
//   } else if (num === 1) {
//     return "1 is not a prime";
//   } else if (num > 1) {
//     isPrime = true;
//     for (let i = 2; i <= num / 2; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   }

//   if (isPrime) {
//     return "Num is  prime";
//   } else {
//     return "Num is not a prime";
//   }
// }
// console.log(prime(23));
////////////////////////////////////////////////////////////////////////////////
//14.JavaScript Program to Print All Prime Numbers in an Interval

// function primeInInterval(lowerNum, higherNum) {
//   for (let i = lowerNum; i <= higherNum; i++) {
//     let interval = 0;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         interval = 1;
//         break;
//       }
//     }
//     if (i > 1 && interval === 0) {
//       console.log(i);
//     }
//   }
// }

// console.log(primeInInterval(2, 10));
////////////////////////////////////////////////////////////////////////////////
//15.JavaScript Program to Find the Factorial of a Number

// function factorial(num) {
//   if (num === 0) {
//     return `${num} have a Fact of 0`;
//   } else if (num === 1) {
//     return `${num} have a Fact of 1`;
//   } else if (num > 1) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//       fact *= i;
//     }
//     return `${num} have a Fact of  ${fact}`;
//   }
// }
// console.log(factorial(5));
////////////////////////////////////////////////////////////////////////////////

//16.Javascript program to display multiplication of number

// function multiplication(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
//   }
// }
// console.log(multiplication(3));
////////////////////////////////////////////////////////////////////////////////
//17.Javascript program to print fibonacci series

// function fibonacci(num) {
//   let n1 = 0,
//     n2 = 1,
//     nextTerm;

//   for (let i = 1; i <= num; i++) {
//     //BAS VALUE KO EK DUSRE MAI INTERCHANGE KARNA H
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }

// console.log(fibonacci(10));
////////////////////////////////////////////////////////////////////////////////
//18.JavaScript Program to Make a Simple Calculator

// function calci(opreation, num1, num2) {
//   if (opreation === "+") {
//     return num1 + num2;
//   } else if (opreation === "-") {
//     return num1 - num2;
//   } else if (opreation === "*") {
//     return num1 * num2;
//   } else if (opreation === "/") {
//     return num1 / num2;
//   } else {
//     return "Please enter a valid opreation";
//   }
// }

// console.log(calci("*", 2, 3));//6
////////////////////////////////////////////////////////////////////////////////
//19.JavaScript Program to Find the Sum of All Natural Numbers

// function sumNatural(num) {
//   if (num > 1) {
//     sum = 0;
//     for (let i = 0; i <= num; i++) {
//       sum += i;
//     }
//     return `The sum of all natural number is ${sum}`;
//   } else {
//     return "Please enter Natural number";
//   }
// }

// console.log(sumNatural(5));//15
////////////////////////////////////////////////////////////////////////////////
//20.JavaScript Program to Check if the Numbers Have Same Last Digit

// function lastDigit(a, b, c) {
//   //charAt property batata h ki Us index pe konsa character h
//   //Aur hum charAt mai Last Index pass karre h length-1 karke Toh usse apne ko last Character mil jayega
//   const aResult = a.charAt(a.length - 1);
//   const bResult = b.charAt(b.length - 1);
//   const cResult = c.charAt(c.length - 1);
//   if (aResult === bResult && aResult === cResult) {
//     return `The Last Digit of three numbers is ${cResult}`;
//   } else {
//     return `They does not have same last digit`;
//   }
// }

// console.log(lastDigit("12", "32", "42")); //Same
////////////////////////////////////////////////////////////////////////////////
