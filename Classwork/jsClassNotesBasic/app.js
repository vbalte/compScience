///////////Primitives
/*  let numbers = 4;  //if you used const, cannot reassign 
numbers = 5; //redefining it, console shows 5
let numbersArrays = [1,2,3,4,5]; 
console.log(numbers); 

let string = 'string'; //can use single or double quote 
let strings = "strings"; 

let boolean = true; //true or false only 
 */
//////////////////////

const firstName = 'Rob';
const job = "Student";
const birthyear = 2002;
let isMarried = false;

/* console.log("Hello my name is " + firstName + "I am a " + job ); //old way to do it  */

console.log(`Hello my name is ${firstName}, I am a ${job}`) //can even use boolean in the sentence 

const now = new Date().getFullYear(); 
const yearVeda = 2002;
let fullAge = 18; 
let isFullAge = now - yearVeda >= fullAge; 

console.log(isFullAge); 
let ageWill = now - 2002;
let ageNick = 18;
let averageAge = (ageNick + ageWill) / 2 ;
console.log(averageAge); 

let x,y;
x = y;
y = 5;
console.log(x);









// console.log(now); //returns back the date, pulls from computer 







