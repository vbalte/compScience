/* let x = 2 + '2'; //number to a string is easy

console.log(x); //converted the number into a string, came back 22

let x= 2 + 2 + '2'; //comes back 42, goes left to right, adds first then makes it a string

//true = 1, false = 0 , easy to convert boolean logic 

let x = 2 + true; // converts boolean to number, returns 3

let x = 2 + true + '2' ; //returns back 32 

let x = true + '2' ; //returns back true2 (easy boolean to string)

let x = Number('2'); //(convert string to number))

let x = Number('Hello'); //returns back NaN (not a number)

let x = Boolean(1); //returns back true

let x = Boolean(5); //retuns back true, ALL NON ZERO VALUES RETURN TRUE 

let x = Boolean('Hello'); //all strings return back true

let x = Boolean(""); //empty string returns false and null/undefined and 0 returns back boolean false

let x = Boolean('false'); //still returns back true bc its a string 

!== //not equal to 

|| //means OR

let x = " ";

if (x) {

} //this will detect undefined, null, nothing

//objects are always true if converting to boolean (if not primitive) */