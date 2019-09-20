//list of avengers
const avengers = [];

//get user input (skip for now)



//create individual avengers ** Objects function constructor
function Avenger(alias, identity, powers, firstAppearance) {
    this.alias = alias;
    this.identity = identity;
    this.powers = powers;
    this.firstAppearance = firstAppearance;
    this.yearsActive = function(){
        return new Date().getUTCFullYear() - this.AvengerfirstAppearance;
    }
}

/* const ironMan = new Avenger('Iron-Man', 'Tony Stark', 'Smart,Facial Hair,Dead', 1963);
console.log(ironMan); */


//push into array
function addAvenger(alias, identity, powers, firstAppearance){
    avengers.push(new Avenger(alias, identity, powers, firstAppearance));
}

addAvenger('Captain America', 'Steve Rogers', 'Freedom', 1941); 

//display object on screen 

