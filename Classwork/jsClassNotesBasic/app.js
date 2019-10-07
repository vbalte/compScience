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
let isMarried = false;

/* console.log("Hello my name is " + firstName + "I am a " + job ); //old way to do it  */

/* console.log(`Hello my name is ${firstName}, I am a ${job}`) //can even use boolean in the sentence 

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
 */
 







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


//////////////functions 
/* function calculateAge(birthYear) {
    console.log(2019 - birthYear) ;
    return 2019 - birthYear;
}

let galloBirth = 2002;
calculateAge(galloBirth); 
//functionCall(argument goes here);


function noArg() {
    console.log(`something`);
}

noArg();  */



//variable As function 

/* const ageGallo = calculateAge(2002);
const ageIlsa = calculateAge(2003);
const ageThami = calculateAge(2004);
console.log(ageGallo, ageIlsa, ageThami);

let firstName = `Brendan`

function yearsUntilRetirement(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age ;

    console.log(`${firstName} retires in ${retirement} years`)
}

yearsUntilRetirement (2002, firstName); */

//VARIABLE NOT ACCESSIBLE OUTSIDE FUNCTION 


///function whatDoYouDo(job, firstName) {}; Function declaration without definition/expression
/* 
let whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + 'teachers children';
        case 'driver':
            return firstName + 'drivers people....over Bryan' ;
        case 'designer' :
             return firstName + 'designers things';
        default:
           return firstName + 'is broke and homeless';
    }
}

console.log(whatDoYouDo('teacher' , 'Thami')) ;
console.log(whatDoYouDo('driver' , 'veda'));
console.log(whatDoYouDo('musician' , 'rob'));
 */

//***************/ Arrays




//Initalizing an array
/* let names = ['Brian', 'andrew', 'Winny', 'Kaey'];
let numbers = [1,25,6,7,8];
let crazyArray = ['string', 203, true];

console.log(name[0]);
console.log(names.length);

names.forEach(function(el)){
    console.log(el);
}

 */
/* 
 let names = ['Brian', 'andrew', 'Winny', 'Kaey']; 
 const namPairs = [names[0] + names[1],
/*     names [2] + names [3] ]; */

////////OBJECTS AND METHODS

/* const hero = {
    alias : `Spiderman`,
    firstName : `Peter`,
    lastName: `Parker`,
    age: 16,
    goodGuy: true,
    location: {
        state: `NY`,
        city: `NYC`
    },
    getBirthYear: function() {
        return 2019 - this.age; //goes back into the object and calls value
    }
 */



/* 
console.log(hero.getBirthYear());
console.log(hero.location.city);

const me = Object.create(hero);
//myCar.make = `Ford` ;
me.alias = `Superman`;
console.log(me);
console.log(hero); 
  */



  ///////LOOPS AND ITERATIONS

//   const cars = [`Ford`, `Chevy`, `Honda`, `Toyota`];
 /*  for (i = 0; i <= cars.length; i++);

 */


/* cars.forEach(function(car) {
    console.log(`${car}`); 
}) */ //replace for loop, iterate through array 




// hoisting, scope, and execution stack AKA JAvascript you dont see 


/* 

//execution stack
function test1(){
    console.log(`Test1`)
    function Test2() {
        console.log(`Test2`);
        function test3 (){
            console.log(`test3`);
        }
        test3()
    }
    Test2()
}


test1()  */   ///infinite loop


///hoisting


/* 
function Test1(){
    console.log(`this is hoisted?`)
}


const notHoisted = function() {
    console.log(`I am not hoisted`);
} 

Test1()
notHoisted() */ //cannot put above where u declared the function 


//////this keyword

/* function test1() {
    console.log(this);
}
test1() 
 */


/* const Spiderman = {
    alias : `Spiderman`,
    firstName : `Peter`,
    lastName: `Parker`,
    age: 16,
    goodGuy: true,
    location: {
        state: `NY`,
        city: `NYC`
    },
    getBirthYear: function(){
        console.log(this);
    }

} */
//this points to our object 
/* Spiderman.getBirthYear(); */


// make new 
/* function Hero(alias, powers, age) {
    this.alias = alias;
    this.powers = powers;
    this.age = age; 
}
const batman = new Hero(`Batman`, `Healthy`, 44);
console.log(batman);

 */

 class Album {
     constructor(title, artist, yearReleased){
         this.title = title;
         this.artist = artist; 
         this.yearReleased = yearReleased;
     }

     calculateAge(){
        return (new Date().getFullYear() - this.yearReleased); //maybe can use an arrow function here
     }  //private function inside the class 
 }


 const abbeyRoad = new Album('Abeey Road', 'The Beatles', 1969) //Instantiate new album 
 const americanTeen = new Album('AmericanTeen', 'Khalid', 2017); 
 
//  console.log(americanTeen); 

class CD extends Album {
    constructor(title, artist, yearReleased,digital) {
        super(title, artist, yearReleased);
        this.digital = this.digital; 
    }
}

