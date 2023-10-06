






/*================Chapter 21 (Changing Case)===========*/


//  1. Type the characters that are missing from this code.
//                     var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.

// var userInput = "karachi";
// var allLower = userInput.toLowerCase();


// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.

// var x = "PAKISTAN";

// y = x.toLowerCase();
// console.log(y);


// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.

// var y = "islamabad";
// x = y.toUpperCase();
// console.log(x);


// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

// var x = "ISLAMABD";

// var y = x.toLocaleLowerCase();
// console.log(y);


// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.

// var x = ["HELLO" ,"WORLD"];

// index = 1

// if(index >= 0 && index < x.length){
//     var y = x[index].toLowerCase();
//     console.log(y);
// }else{
//     console.log("Invalid index");
// }


// 6. Display in an alert the upper-case version of the string
// represented by a variable.


// var x = "hello world";

// var y = x.toUpperCase();
// console.log(y);


// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.


// var cityName = "kaRacHi";

// var y = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(y);


/*================Chapter 21 (Changing Case) end===========*/








/*================Chapter 22 - 25 (Strings)===========*/

//  1. "captain" has been assigned to variable “sameWords”. You want
//      to slice "ap" out of it.


// var someWords = "captain";

// var copyRight = someWords.slice(1,3);
// console.log(copyRight);


// 2. The number of characters in the string will be assigned to the
// variable.


// var value = "pakistan zony";

// var value1 = value.length;
// console.log(value1);

// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.

// var animal = "elephant";

// animal1 = animal.slice(2,6);

// seg = animal1;

// console.log(seg);

// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.



// var string = "pakistan zony";

// var string1 = value.length;
// console.log(string1);



// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.


// var zunair = "bangladash";

// hamza = zunair.length;
// console.log(hamza);

// ali = zunair.slice(1,7);

// console.log(ali);

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

// var text = "To be or to be.";
// var index = text.indexOf("be");
// console.log(index);

// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself.

// var text = "To be or not to be.";
// var index = text.lastIndexOf("be");
// console.log(index);


// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.

// var text = "Find the index of the first character of the last instance of go the string";

// var index = text.lastIndexOf("go");
// console.log(index);

// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string

// var indexNum = 5;
// if(5 > indexNum){
//     console.log("yes")
// }else{
//     console.log("no");
// }

// 10. In this string "abcde", what character is at index 2? (Use
//     charAt)

// var text = "abcde";

// index = text.charAt(2);
// console.log(index);

// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.

// var character = "jawan pakistan";

// var cha = character;
// console.log(cha);

// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.

// var str = "jawan pakistan";
// var x = str.charAt(str.length - 1);

// console.log(x);

// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.

// var input = "string";
// cha = input.charAt(4);
// console.log(cha);

// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.

// var str = "pakistan";

// if (str.charAt(2) === 'i') {
//     console.log("yes")
// }else{
//     console.log("no")
// }



// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand


// var reply = "no, not really, no way";
// var charArray = [];
// for (var i = 0; i < reply.length; i++) {
//     charArray.push(reply.charAt(i));
// }

// var revisedReply = charArray.join('').replace("no", "yes");

// console.log(revisedReply);

// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.

// var str = "1 is the loneliest number. 1 and only.";

// var index = str.replace("1", " one");

// console.log(str);
// console.log(index);


// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");

// var x = ["a","z","y"];

//  var y = x.replace(/a/g, "z");
// console.log(y);

// ya nhi chal ra is ka keya masla hai dakh ly na


/*================Chapter 22 - 25 (Strings) end ===========================*/



/*================Chapter 26 (Rounding Numbers)=================*/


// 1. Form a statement that rounds a number to the nearest integer.


// var num = Math.round(1.0);

//    2. Round up a number represented by origNum and assign it to
//     roundNum, which hasn't been declared beforehand.

// var origNum = 12.34;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);

// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.


// var origNum = 12.34;
// roundNum = Math.floor(origNum);
// console.log(roundNum);

// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.

// var num = 30.2944758;
// num1 = Math.round(num);

// console.log(num1);

// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.

// var num = .5;
// num1 = Math.floor(num);
// console.log(num1);

/*================Chapter 26 (Rounding Numbers) end=================*/






/*================Chapter 27 (Random Numbers)=================*/

//   1. Convert a random number generated by JavaScript to a number in
//   the range 1 to 50


// var randomNum = Math.random();

// var randomNum1 = Math.floor(randomNum * 50) + 1;

// console.log(randomNum1);

// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.

// var num = Math.random();

// var numNew = Math.random(num);
// console.log(numNew);

// 3. You have to create a dice in JavaScript with the use of pseudorandom number.

// function ab(num) {
//     var num = Math.floor(num * 10) + 1;
//     return num;
// }
//  var result = ab(num);
//  console.log(result);

// ya b dakh ly na shamje nhi aye

// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.

// var randomNum =  Math.random();

// if(randomNum > 0.1){
//     console.log("head")
// }else{
//     console.log("tail")
// }

/*================Chapter 27 (Random Numbers) end=================*/






/*================Chapter 28, 29 (Converting Strings)=================*/



//  1. How do you convert a string to an integer in JavaScript?

// var str = "34";

// var str1 = parseInt(str);
// console.log(str);
// console.log(str1);


// 2. Write a JavaScript function to convert the string "123" to an
// integer

// var str = "123";
// function abc() {
//     var num = parseInt(str);
//     return num;
// }
// abc();
// var value = abc();
// console.log(value);

// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?


// var num = "1.234568";

// num1 = parseFloat(num);

// console.log(num1);

// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?


// function isConvertibleToNumber(str) {
//     return !isNaN(parseFloat(str)) && isFinite(str);
// }

// var string1 = "123";       // Valid integer string
// var string2 = "3.14";      // Valid decimal string
// var string3 = "-42.75";    // Valid negative decimal string
// var string4 = "abc";       // Invalid string

// console.log(isConvertibleToNumber(string1));
// console.log(isConvertibleToNumber(string2));
// console.log(isConvertibleToNumber(string3));
// console.log(isConvertibleToNumber(string4));

// 5. How can you convert a number to a string in JavaScript?


// var num = 34;

// var convert = num.toString();
// console.log(convert);

// 6. Write a JavaScript function to convert the number 42 to a string.


// var num = 42;
// function kuchbi() {
//  var num1 = num.toString();
//  return num1;
// }

// kuchbi();
// var reslt = kuchbi();
// console.log(reslt);

// 7. Can you convert a string representing a decimal number (e.g.,
//     "3.14") to an integer in JavaScript? If so, how?


// var str = "3.14";
// var str1 = parseFloat(str);
// console.log(str1);

// str2 = Math.round(str1);
// console.log(str2);

/*================Chapter 28, 29 (Converting Strings) end=================*/




/*==============Chapter 30 (Controlling the length of decimals)===============*/


// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.

// var num = 3.245320;

// number = num.toFixed((4));

// newNum = number;
// console.log(newNum);

// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.

// var number = "123";

// number1 = parseInt(number) + 2;
// console.log(number1);

// same = number1.toString() + 2;
// console.log(same);

// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.


// if (num.toFixed(2).toString().length > 4) {

//   }


// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.

// const originalNumber = 123.4567890123456789; // Example number with many decimal places
// const roundedNumber = originalNumber.toFixed(2).toString();

// alert("Rounded Number: " + roundedNumber);


/*==============Chapter 30 (Controlling the length of decimals) end===============*/






/*==============Chapter 31 - 34 (Date & Time)===============*/


// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.

// var date = new Date();
// dobj = new Date();
// console.log(dobj);

// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.

// var date = new Date();

// dstr = date.toString();
// console.log(dstr);

// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.


// var day = new Date();

// day1 = day.getDay();
// console.log(day1);

// 4. The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.

// var currentDate = new Date();

// var dayIndex = currentDate.getDay();

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// alert("Today is " + dayNames[dayIndex]);


// 5. Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.

// var date = new Date();
// var getDate = date.getDate();
// var getTime = date.getTime();

// console.log(getTime);
// console.log(getDate);

// 6. Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.



// var later = new Date(2020, 11, 0);

// console.log(later);


// 7. Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.


// var newDate = new Date(1992, 1, 2);

// console.log(newDate);


// 8. Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.

// alert(new Date(1980, 0, 1).getTime());


// 9. How do you change the year of a date in JavaScript?

// var currentDate = new Date(); 
// currentDate.setFullYear(2023); 
// console.log(currentDate);

// 10. Write a JavaScript function to change the month of a given
// date to January.

// function changeToJanuary(inputDate) {
//     inputDate.setMonth(0); 
//   }
  
  
//   var currentDate = new Date(); 
//   changeToJanuary(currentDate); 
//   console.log(currentDate);

// 11. What is the method to change the day of the week for a
// specific date in JavaScript?

// tum kar dy na ya ??????????????????????????????????????????


// 12. Write a JavaScript function to change the minutes of a given
// time to a specific value. (Value by prompt)

// function changeMinutesToSpecificValue(inputDate) {
//     var newMinutes = parseInt(prompt("Enter the new value for minutes:"));
    
//     if (!isNaN(newMinutes)) {
//       inputDate.setMinutes(newMinutes);
//     } else {
//       console.log("Invalid input for minutes.");
//     }
//   }
  
  
//   var currentTime = new Date(); 
//   changeMinutesToSpecificValue(currentTime); 
//   console.log(currentTime); 
  
  
// 13. Write a JavaScript function to add a specific number of
// hours to a given time.
  
  
// function addHours(inputDate, hoursToAdd) {
//     inputDate.setTime(inputDate.getTime() + hoursToAdd * 60 * 60 * 1000);
//   }
  
  
//   var currentTime = new Date();
//   var hoursToAdd = parseInt(prompt("Enter the number of hours to add:"));
  
//   if (!isNaN(hoursToAdd)) {
//     addHours(currentTime, hoursToAdd); 
//     console.log(currentTime); 
//   } else {
//     console.log("Invalid input for hours.");
//   }

// 14. You have to create a age calculator in JavaScript.

// function calculateAge(birthdate) {
//     var currentDate = new Date();
//     var birthDate = new Date(birthdate);
    
//     var years = currentDate.getFullYear() - birthDate.getFullYear();
//     var months = currentDate.getMonth() - birthDate.getMonth();
    
//     if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate())) {
//       years--;
//     }
    
//     return years;
//   }
  
//   // Example usage
//   var birthdate = prompt("Enter your birthdate (YYYY-MM-DD):");
//   var age = calculateAge(birthdate);
//   console.log("Your age is: " + age + " years");
  
  
  
       /*==============Chapter 31 - 34 (Date & Time) end===============*/
  
  
       

       /*==============Chapter 35 - 37 (Functions)===============*/


    //    1. Code the first line of a function displayAlert.

//     function displayAlert(message) {
//         alert("messages");
//     }
//   displayAlert();

// 2. Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.



// function askName() {
//     var userName = prompt("Enter name");
//     return userName;
// }
// askName();


// 3. Code a function that calls 2 other functions.

// function firstFunction() {
//     console.log("This is the first function.");
// }

// function secondFunction() {
//     console.log("This is the second function.");
// }

// function callOtherFunctions() {
//     firstFunction();
//     secondFunction();
// }


// 4. Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.



// function displayNameAlert() {
//     var name = prompt("Enter name");
//     alert("Entered name: " + name);
// }


// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.



// function concat(a, b, c, variable, string, number) {

// }



// 6. Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand



// function concatenateAndAssign(param1, param2) {
//     var result = param1 + param2;
//     return result;
// }


// var concatenatedValue = concatenateAndAssign("Hello, ", "world!");

// console.log(concatenatedValue);


// 7. Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.


// function multiplyAndAssign(param1, param2, param3) {
//     var result = param1 * param2 * param3;
//     return result;
// }


// var multiplicationResult = multiplyAndAssign(2, 3, 4);

// console.log(multiplicationResult);

// 8. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0; 
//     }

//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     var average = sum / numbers.length;
//     return average;
// }

// var numberArray = [10, 20, 30, 40, 50];
// var avg = calculateAverage(numberArray);
// console.log("Average:", avg);


// 9. Write a JavaScript function that takes two parameters and returns
// their sum.

// function addNumbers(a, b) {
//     return a + b;
//   }
  
//   // Example usage
//   const num1 = 5;
//   const num2 = 7;
//   const sum = addNumbers(num1, num2);
//   console.log(sum);

// 10. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.


// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0; // Handle the case of an empty array
//     }
  
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const average = sum / numbers.length;
//     return average;
//   }
  
//   // Example usage
//   const numbersArray = [5, 10, 15, 20];
//   const avg = calculateAverage(numbersArray);
//   console.log(avg);


// 11. You have to capture the returned value from a function and
// store it in a variable?

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0; 
//     }
  
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const average = sum / numbers.length;
//     return average;
//   }
  

//   const numbersArray = [5, 10, 15, 20];
//   const avg = calculateAverage(numbersArray); 
//   console.log(avg); 

// 12. Write a function which tells letter counts of (word).

// function countLetters(word) {
//     const letterCounts = {};
  
//     for (const letter of word) {
//       if (letter in letterCounts) {
//         letterCounts[letter]++;
//       } else {
//         letterCounts[letter] = 1;
//       }
//     }
  
//     return letterCounts;
//   }
  
//   // Example usage
//   const word = "hello";
//   const result = countLetters(word);
//   console.log(result);

// 13. Write a function to set (year) in date object.


// function setYearInDate(year) {
//     const date = new Date();
//     date.setFullYear(year);
//     return date;
//   }
  
//   // Example usage
//   const yearToSet = 2023;
//   const newDate = setYearInDate(yearToSet);
//   console.log(newDate);


// 14. Write a function which tells the age of a person who Born on
// (dateOfBirth)


// function calculateAge(dateOfBirth) {
//     const birthDate = new Date(dateOfBirth);
//     const currentDate = new Date();
    
//     const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    
//     // Adjust the age if the birth date hasn't occurred yet this year
//     if (currentDate.getMonth() < birthDate.getMonth() ||
//         (currentDate.getMonth() === birthDate.getMonth() &&
//          currentDate.getDate() < birthDate.getDate())) {
//       return yearsDiff - 1;
//     } else {
//       return yearsDiff;
//     }
//   }
  
//   // Example usage
//   const dateOfBirth = "1990-08-26"; // Format: YYYY-MM-DD
//   const age = calculateAge(dateOfBirth);
//   console.log(age);

// 15. Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false


// function checkWordPresence(word, array) {
//     return array.includes(word);
//   }
  
//   // Example usage
//   const wordsArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
//   const searchWord = 'raza';
//   const isWordPresent = checkWordPresence(searchWord, wordsArray);
//   console.log(isWordPresent);


// 16. Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)

// function repeatLetter(letter) {
//     return letter.repeat(10);
//   }
  
//   // Example usage
//   const letterToRepeat = 'a';
//   const repeatedLetters = repeatLetter(letterToRepeat);
//   console.log(repeatedLetters);


// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()

// function reverseArray(arr) {
//     return arr.reverse();
//   }
  
//   // Example usage
//   const originalArray = ['a', 'b', 'c', 'd', 'e'];
//   const reversedArray = reverseArray(originalArray);
//   console.log(reversedArray);



        /*==============Chapter 35 - 37 (Functions) end===============*/




/*======Chapter 38 (Local vs. Global  Variables)===============*/


// 1. Write a JavaScript function that demonstrates the usage of a local
// variable.

// function demonstrateLocalVariable() {
//     const localVar = "I am a local variable"; 
    
//     console.log(localVar); 
//   }
  
//   demonstrateLocalVariable();

// 2. How can you access a global variable inside a function in
// JavaScript?

// const globalVar = "I am a global variable";


// function accessGlobalVariable() {
//   console.log(globalVar); 
// }


// accessGlobalVariable();

/*==================Chapter 38 (Local vs. Global  Variables) end===============*/




/*================Chapter 39, 40 (Switch Statements)==================*/


// 1. Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.

// function performActionBasedOnValue(value) {
//     switch (value) {
//       case 'case1':s
//         console.log("Action for case 1");
//         break;
//       case 'case2':
//         console.log("Action for case 2");
//         break;
//       case 'case3':
//         console.log("Action for case 3");
//         break;
//       default:
//         console.log("Default action");
//     }
//   }

  
//   const inputValue = 'case2';
//   performActionBasedOnValue(inputValue);



// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user



// function checkCity(cityName) {
//     switch (cityName) {
//       case 'New York':
//         alert("You've selected New York!");
//         break;
//       case 'Los Angeles':
//         alert("You've selected Los Angeles!");
//         break;
//       case 'Chicago':
//         alert("You've selected Chicago!");
//         break;
//       default:
//         alert("City not recognized.");
//     }
//   }
  
//   const userCity = prompt("Please enter a city name:");
//   checkCity(userCity);

  
/*=========================== THE END ============================*/
  
  
  
  