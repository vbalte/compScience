//Global scope 

var a = 1;
let b = 2;
const c = 3;

/* function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Function scope:` a, b, c); 

}

test();  */


/* if(true) {
    // BLOCK SCOPE 
    var a = 4;
let b = 5;
const c = 6;
console.log(`IF Scope:`, a,b,c ); 
}
 */

 for(var a = 0; a <10; a++) {
     console.log(`Loop: ${a}` ); 
 } // the use of var changes the value of global a 



console.log(`Global scope: ` , a, b, c); 


// let and const are block level, var has a function scope


// var lets you change the value of it and change it 
