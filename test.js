// ***Check if number is positive, negetive or zero

// let number = 0;

// if (number > 0) {
//   console.log("Number is positive");
// } else if (number === 0) console.log("Number is zero");
// else console.log("Number is negetive");

//*** Check if number is odd or even */

// const number = Number(prompt("Enter your number"));

//       if (number % 2 === 0) console.log("Number is Even");
//       else console.log("Number is Odd");

//       //OR

//       number % 2 === 0
//         ? console.log("Number is Even")
//         : console.log("Number is Odd");

// **** Find the largest among three numbers

// let largestNumber;

//       let num1 = parseFloat(prompt("Enter first number"));
//       let num2 = parseFloat(prompt("Enter second number"));
//       let num3 = parseFloat(prompt("Enter third number"));

//       // if (num1 >= num2 && num1 >= num3)
//       //   console.log("Number one is the largest");
//       // else if (num2 >= num1 && num2 >= num3)
//       //   console.log("Number two is the largest");
//       // else console.log("Number three is the largest");

//       //OR

//       largestNumber = Math.max(num1, num2, num3);

//       console.log(`The largest number is ${largestNumber}`);

// ** Check Prime Number

// let number = parseInt(prompt("Enter a positive number?"));

//       // if (number === 1) console.log("1 is neither prime nor composite");
//       // else if (number > 1) {
//       //   for (let i = 2; i <= number / 2; i++) {
//       //     if (number % i === 0) {
//       //       isPrime = false;
//       //       break;
//       //     }
//       //   }

//       //   if (isPrime) console.log(`${number} is a prime number`);
//       //   else console.log(`${number} is not a prime number`);
//       // } else
//       //   console.log("Enter a posiive number to Check if it is a prime number!");

//       //OR

//       let n = number;

//       function isPrime(n) {
//         if (n <= 1) return false;
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//           if (n % i === 0) return false;
//         }
//         return true;
//       }

//       console.log(isPrime(n));

// ** Print all prime numbers in an interval

// let firstNum = parseInt(prompt("Enter first number"));
//       let secondNum = parseInt(prompt("Enter second number"));

//       console.log("The prime numbers between first and last numbers are: ");

//       for (let i = firstNum; i <= secondNum; i++) {
//         let flag = 0;

//         for (let j = 2; j < i; j++) {
//           if (i % j === 0) {
//             flag = 1;
//             break;
//           }
//         }

//         if (i > 1 && flag === 0) {
//           console.log(i);
//         }
//       }

// **** Find the Factorial of a Number

// let num = parseInt(prompt("Enter a positive number:"));
// if (num < 0) console.log("Enter a positive number");
// else if (num === 0) {
//   console.log("The factorial of " + num + " is 1");
// } else {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }

//   console.log("The factorial of " + num + " is: " + fact);
// }

// **** Display the Multiplication Table

// let number = parseInt(prompt("Enter number whose table you want?"));

//       let range = parseInt(
//         prompt("Enter the range uptil you want of the table")
//       );

//       let result;

//       for (let i = 1; i <= range; i++) {
//         result = number * i;

//         console.log(`${number} X ${i} = ${result}`);
//       }

// *** Print the Fibonnaci Sequence

// let numbers = parseInt(prompt("Enter the number of terms?"));

// let n1 = 0;
// let n2 = 1;

// let newNum;

// // for (let i = 0; i <= numbers; i++) {
// //   console.log(n1);
// //   newNum = n1 + n2;
// //   n1 = n2;
// //   n2 = newNum;
// // }

// //OR Upto a certain number

// console.log(n1);
// console.log(n2);

// newNum = n1 + n2;

// // for (let i = newNum; i < numbers; i++) {
// //   console.log(newNum);
// //   n1 = n2;
// //   n2 = newNum;
// //   newNum = n1 + n2;
// // }

// //OR

// while (newNum <= numbers) {
//   console.log(newNum);
//   n1 = n2;
//   n2 = newNum;
//   newNum = n1 + n2;
// }

// **** Make a Simple Calculator

// let operator = prompt("Enter the operator you want from '+', '-', '/', '*'");
// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function calc(a, b) {
//   let result;

//   if (operator === "+") {
//     result = add(a, b);
//   } else if (operator === "-") {
//     result = subtract(a, b);
//   } else {
//     result = "Enter a valid operator";
//   }
//   return `Result of ${a} ${operator} ${b} is ${result}`;
// }

// console.log(calc(4, 2));

// *** Find the Sum of Natural Numbers

// let num = parseInt(
//   prompt("Enter a positive number uptil which you want to do the sum?")
// );

// let sum = 0;

// for (let i = 0; i <= num; i++) {
//   sum += i;
// }

// console.log(sum);

// *** Check if Numbers have same last digit

// let num1 = parseInt(prompt("Enter first number: "));
// let num2 = parseInt(prompt("Enter second number: "));
// let num3 = parseInt(prompt("Enter third number: "));

// let result1 = num1 % 10;
// let result2 = num2 % 10;
// let result3 = num3 % 10;

// if (result1 == result2 && result1 == result3) {
//   console.log(
//     `The numbers ${num1}, ${num2} and ${num3} have the same last digit`
//   );
// } else
//   console.log(
//     `The numbers ${num1}, ${num2} and ${num3} do not have the same last digit`
//   );
