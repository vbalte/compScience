/* //list of avengers
const avengers = [];

//get user input (skip for now)



//create individual avengers ** Objects function constructor
/* function Avenger(alias, identity, powers, firstAppearance) {
    this.alias = alias;
    this.identity = identity;
    this.powers = powers;
    this.firstAppearance = firstAppearance;
    this.yearsActive = function(){
        return new Date().getUTCFullYear() - this.AvengerfirstAppearance;
    }
} */

/* const ironMan = new Avenger('Iron-Man', 'Tony Stark', 'Smart,Facial Hair,Dead', 1963);
console.log(ironMan); */


//push into array
/* function addAvenger(alias, identity, powers, firstAppearance){
    avengers.push(new Avenger(alias, identity, powers, firstAppearance));
} */

//addAvenger('Captain America', 'Steve Rogers', 'Freedom', 1941); 

//display object on screen 

/* const form = document.querySelector('#hero-form'); //could also getElementbyId
const userAlias = document.querySelector('#alias');
const userPowers = document.querySelector('#powers');
const userFullName = document.querySelector('#full-name');
const userFirstAppearance = document.querySelector('#first-appearance');
const userImage = document.querySelector('#image');
const display = document.querySelector('.display'); 

function eventListeners() {
   form.addEventListener('submit', displayAvengerMember);
   display.addEventListener('click', removeAvenger); 
   /* form.addEventListener('submit', function(){
    console.log('test');
   }); */
/* 
}
   
eventListeners();

function displayAvengerMember(e) {
    let html = '<div class="display-avengers"><div class="display-alias">%alias%</div><div class = "display-powers">%powers$</div><div class="display-name">%name%</div><div class="first-appearance"></div><div class="display-image"><img src= "%url%" alt=""></p></div><div class="remove-avenger"><p class="remove-avenger"> Remove Avengers &#10006; </p></p></div></div>'

    let newHtml = html.replace('%alias%', userAlias.value);
    newHtml = newHtml.replace('%powers%', userPowers.value);
    newHtml = newHtml.replace('%name%', userFullName.value);
    newHtml = newHtml.replace('%years%', userFirstAppearance.value);
    newHtml = newHtml.replace('%url%', userImage.value);
    display.insertAdjacentHTML('beforeend', newHtml); 
    console.log('is the vent firing'); 
   

    e.preventDefault(); 
}

function removeAvenger(e) {
    if(e.target.parentElement.classList.contains('remove-avenger')){ */
      /* e.target.parentElement.parentElement.remove();
       console.log(e.target.parentElement); 
    }
} */

/* removeAvenger();   */

//list of avengers
const avengers = [];

//get user input


//create individual avengers ** Objects function constructor
/* function Avenger(alias, identity, powers, firstAppearance){
    this.alias = alias;
    this.identity = identity;
    this.powers = powers;
    this.firstAppearance = firstAppearance;
    this.yearsActive = function(){
        return new Date().getUTCFullYear() - this.firstAppearance;
    }
} */

//const ironMan = new Avenger('Iron-Man', 'Tony Stark', 'Smart, Facial Hair, Dead', 1963);
//console.log(ironMan);

//push into array
/* function addAvenger(alias, identity, powers, firstAppearance){
    avengers.push(new Avenger(alias, identity, powers, firstAppearance));
} */
//addAvenger('Captain America', 'Steve Rogers', 'Freedom', 1941);
//display obejcts on screen

const form = document.querySelector('#hero-form'); //could also getElementById
const userAlias = document.querySelector('#alias');
const userPowers = document.querySelector('#powers');
const userFullName = document.querySelector('#full-name');
const userFirstAppearance = document.querySelector('#first-appearance');
const userImage = document.querySelector('#image');
const display = document.querySelector('.display');

function eventListeners(){
    form.addEventListener('submit', displayAvengerMember);
    display.addEventListener('click', removeAvenger);
    /* form.addEventListener('submit', function(){
       console.log('test');
   });  */
}
eventListeners();

function displayAvengerMember(e) {
    let html = '<div class="display-avenger"><div class="display-alias">%alias%</div><div class="display-powers">%powers%</div><div class="display-name">%name%</div><div class="first-appearance">%years%</div><div class="display-image"><img src="%url%" alt=""></div><div class="remove-avenger"><p class="remove-avenger">Remove Avenger &#10006; </p></div></div>';

    let newHtml = html.replace('%alias%', userAlias.value);
    newHtml = newHtml.replace('%powers%', userPowers.value);
    newHtml = newHtml.replace('%name%', userFullName.value);
    newHtml = newHtml.replace('%years%', userFirstAppearance.value);
    newHtml = newHtml.replace('%url%', userImage.value);
    display.insertAdjacentHTML('beforeend', newHtml);
    //console.log('is the vebnt firing?');
    e.preventDefault(); 

    if(userAlias.value === "") {
        alert('You did not enter the Alias'); 
    } else {
        alert('Successful'); 
    } 

}

//IF ELSE STATEMENT that bring back error msg if they dont fill out message

/* if(userAlias.value === "") {
    alert('You did not enter the Alias'); 
} else {
    alert('Successful'); 
}  */








function removeAvenger(e) {
    if(e.target.parentElement.classList.contains('remove-avenger')){
        e.target.parentElement.parentElement.remove();
       // console.log(e.target.parentElement);
    }
}

// FUNCTION TO RESET TO DEFAULT NOTHING or empty strings

