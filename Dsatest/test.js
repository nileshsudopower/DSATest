// // // Q.1 Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.

// for(i=0;i<=10;i+=2){
//     console.log(i)
// }

// // // Q2. Write a JavaScript while loop that calculates the factorial of a given number.

// var temp = 1
// var number = 5
// i=1
// while(i<=number){
//     temp = temp*i;
//     i++
// }
// console.log(temp)

// // Q3.Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.

// var numbers12 = [1,2,3,4,5]
// function SumArray(numbers12) {
//     var temp1 = 0;
//     for (var i = 0; i <= numbers12.length; i++) {
//       temp1 =temp1+i;
//     }
//     console.log(temp1);
//   }
//   SumArray(numbers12)

// // Q.4 Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.

// let num = 0;
// let num1 = 1;
// console.log(num)
// console.log(num1)
// let number = 10
// let temp2 = num + num1;
// while (temp2 <= number) {
//   console.log(temp2);
//   num = num1;
//   num1 = temp2;
//   temp2 = num + num1;
// }
// // Q.5 Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.

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

// // Q.6 Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.

// const number11 = 7;
// function Prime(number11) {
//     if (number11 < 2) {
//       return false;
//     }

//     for (i = 2; i <= number11 / 2; i++) {
//         if (number11 % i == 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   console.log(`${number11} is prime:`, Prime(number11));

// // Q7 .Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.

// for (let i = 1; i <= 1000; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//   }
// }
// // Q8 .Write a JavaScript function that takes a string as input and returns the reverse of the string using a for loop.

// function reversestring(string) {
//   var temp4 = "";
//   for (var i = string.length - 1; i >= 0; i--) {
//     temp4 += string[i];
//   }
//   console.log(temp4);
// }

// reversestring("nilesh")

// // Q9. Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase) and numbers.

function randomPass() {
    let password = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz' + '0123456789' ;
 
    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()
            * string.length );
 
        password += string.charAt(char)
    }
 
    return password;
}
 
console.log(randomPass());

// // Q10 .Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two numbers in the array.

// var numbers1=[3,4,1,9,2,6,7,5,10,8,29,30,11,13]
// var min=numbers1[0];
// var max=numbers1.length-1;
// function difference(numbers1,min,max){
    
// for(let i=0;i<numbers1.length;i++){
   
//     if(numbers1[i]<min){
//         min=numbers1[i]; 
//         console.log("Min number is :",min);
//     }

//     if(numbers1[i]>max){
//         max=numbers1[i]; //max=29
        
//     }
// }
// console.log("Max number is :",max);
// var new1 = max-min;
// return new1 ;
// }


// console.log("Min number is :",min)
// console.log("Max number is :",max)
// console.log("Max difference in an array",difference(numbers1,min,max))
// console.log(difference(numbers1,min,max))

// // var numbers1=[3,4,1,9,2,6,7,5,10,8,30,11]
// // var min=numbers1[0];
// // var max=numbers1.length-1;
// // for(let i=0;i<numbers1.length;i++){
// //     if(numbers1[i]<min){
// //         min=numbers1[i]; 
// //     }

// //     if(numbers1[i]>max){
// //         max=numbers1[i]; 
// //     }
// // }
// // console.log(min)
// // console.log(max)
// // var new1 = max - min
// // console.log(new1)