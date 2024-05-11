// // Q.Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.
// for(i=0;i<=10;i+=2){
//     console.log(i)
// }
// // Q.Write a JavaScript while loop that calculates the factorial of a given number.
// var temp = 1
// var number = 5
// i=1
// while(i<=number){
//     temp = temp*i;
//     i++
// }
// console.log(temp)
// Q.Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.
// numbers = [1,2,3,4,5]
// function SumArray(numbers) {
//     var temp1 = 0;
//     for (var i = 0; i <= numbers.length; i++) {
//       temp1 =temp1+i;
//     }
//     console.log(temp1);
//   }
//   SumArray(numbers)
// Q.Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.
// let num = 0;
// let num1 = 1;
// console.log(num)
// console.log(num1)
// const number = 10
// let temp2 = num + num1;
// while (temp2 <= number) {
//   console.log(temp2);
//   num = num1;
//   num1 = temp2;
//   temp2 = num + num1;
// }
// Q. Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.
// function funarray(students){
//     var tempvalue =[];
//     for (var i = 0; i < students.length; i++) {
//         if (students[i].length > 5) {
//             tempvalue.push(students[i])

//         }
//     }
//     return(tempvalue)
// }
// var students = ["Nilesh", "Rohan", "Ram", "Vanita", "Riya"];
// const newarray= funarray(students)
// console.log(newarray)

// Q. Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.

// const number = 7;
// function isPrime(number) {
//     if (number < 2) {
//       return false;
//     }

//     for (i = 2; i <= number / 2; i++) {
//         if (number % i == 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   console.log(`${number} is prime:`, isPrime(number));

// Q .Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.
for (let i = 1; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}
