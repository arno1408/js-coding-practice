// **** Check weather a String is a palindrome or not

// let check = "ollo";
//       function checkPalindrome(check) {
//         let arr = check.split("");
//         let reverseArr = arr.reverse();
//         let reverseString = reverseArr.join("");
//         if (check === reverseString) {
//           console.log("It is a palindrome");
//         } else {
//           console.log("It is not a palindrome!");
//         }
//       }

//       checkPalindrome(check);

// ***** Program to Sort Words in Alphabetical Order

// let word = "dcbfroihj";
// let wordArr = word.split("");
// function alphabetical(word) {
//   wordArr.sort();

//   for (word of wordArr) {
//     console.log(word);
//   }
// }

// alphabetical();

// **** Program to replace characters of a String

// let sentence = "This car is blue in color";

//       function replaceWord(s) {
//         let newCar = s.replace("blue", "red");

//         console.log(newCar);
//       }
//       replaceWord(sentence);

// *** Reverse a String using For Loop

// let word = "arno";

//       function reverseString(word) {
//         let reverse = "";
//         for (i = word.length - 1; i >= 0; i--) {
//           reverse += word[i];
//         }

//         console.log(reverse);
//       }

//       reverseString(word);

// ***** Check the Number of Occurrences of a Character in a String

// let word = "looriofo";
// let letter = "o";
// function findOccurance(w, l) {
//   let count = 0;
//   for (i = 0; i < w.length; i++) {
//     if (w.charAt(i) === l) {
//       count += 1;
//     }
//   }

//   console.log(count);
// }

// findOccurance(word, letter);

/// ***** Convert The First Letter Of a String to Uppercase

// let string = "this needs to be uppercase";

// function uppercase(s) {
//   let arr = s.split(" ");
//   let uppercase = [];

//   for (x of arr) {
//     uppercase.push(x.charAt(0).toUpperCase() + x.slice(1));
//   }

//   string = uppercase.join(" ");
//   console.log(string);
// }

// uppercase(string);

// *** Program to Count the Number of Vowels in a String

// let vowels = ["a", "e", "i", "o", "u"];

//       function findVowels(str) {
//         let count = 0;
//         for (s of str.toLowerCase()) {
//           if (vowels.includes(s)) {
//             count++;
//           }
//         }
//         console.log(`The following string has ${count} number if vowels`);
//       }

//       findVowels("Animal");

// *** Program to Check Whether a String Starts and Ends With Certain Characters

// let string = "Animal";

//       function findChars(str) {
//         if (
//           str.toLowerCase().startsWith("a") &&
//           str.toLowerCase().endsWith("l")
//         ) {
//           console.log("It Starts with A and ends with l");
//         }
//       }

//       findChars(string);

// **** Program to Replace All Occurrences of a String

// let word = "this red car is red in color red";

//       let newWord = word.split("red").join("blue");

//       console.log(newWord);

// **** Program to Create Multiline Strings

// let str =
// "This a string\nThis is the second line\nThis is the third line";

// let str2 = `
// This is second string
// This is the second line
// This is the third line`;

// let  str3 = "This is the third string\n \
// Now this can be multiline\n \
// this line too"

// console.log(str);
// console.log(str2);
// console.log(str3)
