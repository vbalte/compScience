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

/* ///////////Primitives
/*  let numbers = 4;  //if you used const, cannot reassign 
numbers = 5; //redefining it, console shows 5
let numbersArrays = [1,2,3,4,5]; 
console.log(numbers); 

let string = 'string'; //can use single or double quote 
let strings = "strings"; 

let boolean = true; //true or false only 
 */
//////////////////////

/* const firstName = 'Rob';
const job = "Student";
const birthyear = 2002;
let isMarried = false; */

/* console.log("Hello my name is " + firstName + "I am a " + job ); //old way to do it  */

/* console.log(`Hello my name is ${firstName}, I am a ${job}`) //can even use boolean in the sentence  */

/* 
let firstName = 'Paul';
let status = 'single';

if(status === 2) {;
    console.log(`${firstName} is single and ready to mingle`);

 } else{
        console.log(`Someone made a big mistake with ${firstName} `)
    } 


    const dejonMass = 92;
    const dejonHeight = 1.95;
    
    const robMass = 78;
    const robHeight = 1.69;
    
    let dejonBMI = dejonMass / (dejonHeight * dejonHeight) ;
    
    let robBMI = robMass / (robHeight * robHeight) ;
    
    let RobhasgreaterBMI = robBMI > dejonBMI; 
    
    console.log(`Hello! Does Rob have a greater BMI than Dejon? ${RobhasgreaterBMI}`); 
    
    console.log(dejonBMI); 
    console.log(robBMI); 

if(robBMI > dejonBMI) {
    console.log('rob is heavier') ;
} else {
    console.log('Dejon is heavier'); 
} */

/* let firstName = 'Sarah' ;
let age = 17;
 */
/* if(age < 13) {
    console.log(`${firstName} is a young lady`);
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager..ugh`);   
} else if (age >= 20 && age < 30) {       //must give a condition with else if
    console.log(`${firstName} is a young women`);
} else {
    console.log(`she a boomer`); 
} */

//////ternary Operator
/* let firstName = 'Melkadze';
let age = 17;

age >= 21 ? console.log(`${firstName} will drink alcohol`) : console.log(`${firstName} will have a coke`) ; */

//condition ? exprIfTrue : exprIfFalse 

//////truthy and falsey and equality operators 

//falsey values: null, 0, undefined, '', NaN 
//Truthy values: Anything not above this line 
/* 
let height = 22;

if (height == '22') {
    console.log('Hey this is type coercision');
} else {
    console.log(`no type coercion with ===`);
}

 */





