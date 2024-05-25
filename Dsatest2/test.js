//Q1. Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.
array = [1, 2, 3, 4, 5];
array1 = [];
function square(array) {
  for (var i = 0; i < array.length; i++) {
    // console.log(array[i])
    var squre1 = array[i] * array[i];
    array1.push(squre1);
  }
  return array1;
}

// const array2=square(array);
// console.log(array2);

// Q2. Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).

function checkifpalindrome(name) {
  const string = name.length;
  for (let i = 0; i < string / 2; i++) {
    if (name[i] !== name[string - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(checkifpalindrome("madam"));

// Q3. Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).

var array1 = [1, 2, 3, 4];
var array2 = [3, 4, 5, 6];

function intersection(array1, array2) {
  var newarray = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        newarray.push(array1[i]);
      }
    }
  }
  return newarray;
}
console.log(intersection(array1, array2));

// Q4. Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.

function fetchonlyvalue(object, key) {
  if (object.hasOwnProperty(key)) {
    return object[key];
  } else {
    const values = Object.values(input);
    // console.log(values);
    return values;
  }
}
var input = { name: "Alice", age: 25 };
console.log(fetchonlyvalue(input, "name"));

// Q5. Write a JavaScript function that takes a number as input and returns an array of its digits.

// function numbertoarray(number) {
//     const array = [];
//     const numberString = number.toString();

//    for (let i = 0; i < numberString.length; i++) {
//     const newarray = parseInt(numberString[i]);
//     array.push(newarray);
//   }
//   return array ;
// }

// var number = 12345;
// let array = numbertoarray(number);
// console.log(array);

// Q6. Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").

// function returnduplicate(string) {
//   let charCount = {};
//   for (var i = 0; i < string.length; i++) {
//     charCount += string[i] + string[i];
//   }
//   return charCount;
// }
// let string = "hello";

// console.log(returnduplicate(string));

// Q7. Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.

// var input=[{name:"Alice"},{name:"Bob"},{name:"Charlie"}]
// function keyvalue(input){
//     for (let key in input) {
//         console.log(input[key]);
//       }
//       return ;
// }
// keyvalue(input)

// Q8.Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.
// Input: "This is a sample sentence."

// function numwords(sentence) {
//   var count = 0;
//   for (var i = 0; i <= sentence.length - 1; i++) {
//     if (sentence[i] === " ") count++;
//   }
//   count++;
//   return count;
// }
// var sentence = "This is a sample sentence";
// console.log(numwords(sentence))

// Q9.Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.
// Input: [10, 2, 14, 5, 7]

// numbers9 = [10, 2, 14, 5, 7];
// function secondsmallest(numbers9) {
//   numbers9.sort((a, b) => a - b);
//   return numbers9[1];
// }
// const secondMin = secondsmallest(numbers9);
// console.log(secondMin);

// Q10. Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".

// date=[2024,4,15]
// function myDate(date){
//     a=date.slice(0,1)
//     b=date.slice(1,2);
//     c=date.slice(2);
//     d=a + '-' + b + '-' + c
//     console.log(d)
// }
// myDate(date)
