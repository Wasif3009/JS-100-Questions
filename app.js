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
//Hum String.at() Method Bhi Use kar sakte the
//Main ye h ki -1 hi use hoga kyuki -1 last index deta h -2 second last index -3 third last index and so on.
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
//21.JavaScript Program to Guess a Random Number

// function randomNum() {
//   let random = Math.floor(Math.random() * 1000) + 1;
//   return random;
// }
// console.log(randomNum());
////////////////////////////////////////////////////////////////////////////////
//22.JavaScript Program to Check Whether a String is Palindrome or Not
// function checkStr(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] === str[str.length - 1 - i])
//       // It compares the character from the start (string[i]) to the character from the end (string[len - 1 - i]).
//      { return "IT IS PALINDROME";
//     }
//   }
//   return "IT IS NOT PALINDROME";
// }
// console.log(checkStr("madam")); //PALINDROME
// string[i]: This accesses the character at position i from the start of the string.
// string[len - 1 - i]: This accesses the character at position i from the end of the string.
// len - 1 is the index of the last character in the string.
// So, len - 1 - i gives the matching index from the end when comparing from both sides.
////////////////////////////////////////////////////////////////////////////////
//23.JavaScript Program to Sort Words in Alphabetical Order
// function sort(str) {
//   return str.split("").sort().join("");
// }
// console.log(sort("wasif"));
//THE SPLIT METHOD CHANGES STRING TO AN ARRAY
//WHERE THE JOIN CHANGES ARRAY INTO STRING
////////////////////////////////////////////////////////////////////////////////
//24.JavaScript Program to Replace Characters of a String
// function replaceStr(str, value, replace) {
//   let newStr = str.replace(value, replace);
//   return newStr;
// }
// console.log(replaceStr("Wasif", "as", "dd"));//Wddif
////////////////////////////////////////////////////////////////////////////////
//25.JavaScript Program to Reverse a String

// function revStr(str) {
//   let revString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revString += str[i];
//   }
//   return revString;
// }

// console.log(revStr("wasif"));
////////////////////////////////////////////////////////////////////////////////
//26.JavaScript Program to Check the Number of Occurrences of a Character in the String

// function strCheck(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == letter) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(strCheck("aaa", "a")); //3
////////////////////////////////////////////////////////////////////////////////
//27.JavaScript Program to Convert the First Letter of a String into UpperCase

// function toUpper(str) {
//   //Main Thing Here is Slice
//   let newStr = str[0].toUpperCase() + str.slice(1);
//   return newStr;
// }

// console.log(toUpper("wasif"));
////////////////////////////////////////////////////////////////////////////////
//28.JavaScript Program to Count the Number of Vowels in a String
// function vowelCount(str) {
//   let count = 0;
//   const vowel = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     if (vowel.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowelCount("wasif"));//2
////////////////////////////////////////////////////////////////////////////////
//29.JavaScript Program to Create Objects in Different Ways

// const obj = {
//   name: "Wasif",
//   age: 20,
//   greet: function () {
//     return `Hello ${this.name}`;
//   },
//   marks: [89, 90, 95, 65],
// };
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.greet());
// console.log(obj.marks);
////////////////////////////////////////////////////////////////////////////////
//30.JavaScript Program to Remove a Property from an Object

// const obj = {
//   name: "Wasif",
//   age: 20,
//   city: "Mira Road",
//   college: "TRCAC",
//   phone: 1234567,
// };

// delete obj.college;
// console.log(obj);
////////////////////////////////////////////////////////////////////////////////
//31.JavaScript Program to Check Whether a String Starts and Ends With Certain Characters

// function checkStr(str) {
//   let first = str[0];
//   let last = str.charAt(str.length - 1);
//   for (let i = 0; i < str.length; i++) {
//     if (first === last) {
//       return `BOTH CHAR ARE EQUAL`;
//     }
//   }
//   return `NOT EQUAL`;
// }
// console.log(checkStr("wasiw")); //EQUAL
////////////////////////////////////////////////////////////////////////////////
//32.JavaScript Program to Check if a Key Exists in an Object

// const obj = {
//   name: "Wasif",
//   age: 20,
//   city: "Mira Road",
//   college: "TRCAC",
//   phone: 1234567,
// };

// // const hasKey = obj.hasOwnProperty("age");

// //OR WE CAN DO THIS STEP LIKE THIS

// const hasKey = "age" in obj;

// if (hasKey) {
//   console.log("KEY EXIST");
// } else {
//   console.log("KEY DOES NOT EXISTS");
// }
////////////////////////////////////////////////////////////////////////////////
//33.JavaScript Program to Clone a JS Object

// const obj = {
//   name: "Wasif",
//   age: 20,
//   city: "Mira Road",
//   college: "TRCAC",
//   phone: 1234567,
// };

// const copyObj = { ...obj };
// copyObj.age = 19;

// console.log(obj);
// console.log(copyObj);
////////////////////////////////////////////////////////////////////////////////
//34.JavaScript Program to Loop Through an Object

// const obj = {
//   name: "Wasif",
//   age: 20,
//   city: "Mira Road",
//   college: "TRCAC",
//   phone: 1234567,
// };

// for (let key in obj) {
//   let value = obj[key];
//   console.log(`${key} : ${value}`);
// }
////////////////////////////////////////////////////////////////////////////////
//35.JavaScript Program to Merge Property of Two Objects

// const obj = {
//   name: "Wasif",
//   age: 20,
//   city: "Mira Road",
//   college: "TRCAC",
//   phone: 1234567,
// };

// const obj2 = {
//   bloodGroup: "O+",
//   birthYear: 2005,
// };

// const mergeObj = Object.assign(obj, obj2);
// console.log(mergeObj);
////////////////////////////////////////////////////////////////////////////////

//36.Count the Number of Key in an Object Using for...in

// const obj = {
//   name: "Wasif",
//   age: 20,
//   city: "Mira Road",
//   college: "TRCAC",
//   phone: 1234567,
// };

// let count = 0;
// for (let key in obj) {
//   count++;
// }
// console.log(count);
////////////////////////////////////////////////////////////////////////////////
//37.JavaScript Program to Generate Random String

// function randomString(length) {
//   const characters = "abcdefghijklmnopqrstuvwxyz123456789";

//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }
// console.log(randomString(5));
////////////////////////////////////////////////////////////////////////////////
//38.JavaScript Program to Check if a String Starts With Another String

// function stringCheck(string, substring) {
//   for (let i = 0; i < string.length; i++) {
//     if (string.startsWith(substring)) {
//       return `YES IT INCLUDES`;
//     } else {
//       return `NO IT DOES NOT INCLUDE`;
//     }
//   }
// }
// console.log(stringCheck("Wasif", "Was"));//INCLUDES
////////////////////////////////////////////////////////////////////////////////

//39.JavaScript Program to Trim a String

// function trimStr(str) {
//   return str.trim();
// }

// console.log(trimStr("            WASIF               "));
////////////////////////////////////////////////////////////////////////////////

//40 . JavaScript Program to Convert Objects to Strings

// const obj = {
//   name: "Wasif",
//   age: 20,
//   city: "Mira Road",
//   college: "TRCAC",
//   phone: 1234567,
// };

// let strName = String(obj["name"]);
// console.log(strName);
////////////////////////////////////////////////////////////////////////////////

//41.JavaScript Program to Compare Two Strings

// function compareStr(str1, str2) {
//   if (str1.toUpperCase() === str2.toUpperCase()) {
//     return "YES THEY ARE EQUAL";
//   }
//   return "THEY ARE NOT EQUAL";
// }
// console.log(compareStr("wasif", "wasif"));
////////////////////////////////////////////////////////////////////////////////
//42.JavaScript Program to Check Whether a String Contains a Substring

// function strFunc(str1, subStr) {
//   if (str1.includes(subStr)) {
//     return "YES IT CONTAINS SUBSTRING";
//   }
//   return "NO IT DOES NOT CONTAIN SUBSTRING";
// }
// console.log(strFunc("wasif", "was"));//yes
////////////////////////////////////////////////////////////////////////////////
//43.JavaScript Program to Replace all Instances of a Character in a String

// function checkInstance(str, change, value) {
//   return str.split(change).join(value);
// }

// console.log(checkInstance("wasif", "as", "ww")); //wwwif
////////////////////////////////////////////////////////////////////////////////
//44.Replace All Line Breaks Using Built-in Methods

// const str = `I am learing Js.
// Its funs and easy to learn.
// Thank you`;

// const result = str.split("\n").join("<br>");
// console.log(result);
////////////////////////////////////////////////////////////////////////////////
//45.JavaScript Program to Display Date and Time

//new Date(year,month,day,hours,minutes,seconds,ms)
//new Date() without arguments, creates a date object with the current date and time:

// const date = new Date();
// console.log(date);
////////////////////////////////////////////////////////////////////////////////
//46.JavaScript Program to Check Leap Year

// function leapYear(year) {
//   if (year % 4 === 0) {
//     return `${year} IS LEAP YEAR`;
//   }
//   return `${year} IS NOT LEAP YEAR `;
// }

// console.log(leapYear(2024)); //LEAP YEAR
////////////////////////////////////////////////////////////////////////////////
//47.JavaScript Program to Format the Date

// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// const year = date.getFullYear();

// if (day < 10) {
//   day = "0" + day;
// }

// if (month < 10) {
//   month = "0" + month;
// }

// console.log(`${day} - ${month} - ${year}`);
////////////////////////////////////////////////////////////////////////////////
//49.Javascript Program to Display Current Date

// const date = new Date();
// const result = date.toDateString();
// console.log(`Date : ${date}`);
////////////////////////////////////////////////////////////////////////////////
