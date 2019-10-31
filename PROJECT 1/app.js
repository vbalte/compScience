// PROJECT 

//one class to create the object person, album, movie
//take arguments 

// const movie = [];

class Movie {
    constructor(title, producer, yearReleased) {
        this.title = title;
        this.producer = producer;
        this.yearReleased = yearReleased;


    this.age = function(){
        // return new Date().getFullYear() - this.yearReleased; 
        console.log(new Date().getFullYear() - this.yearReleased); 
}
    }}


//***View */ Class for the UI which contains methods 
//creates/insert the html for the UI DISPLAYS

class UI {
    //three methods, delete, clear, and push
     addMovieToList(movie) {    //Camel case woot wooot 



        //   const display = document.querySelector('.display');  DONT NEED
        let html = '<div class="display-movie"><div class="display-title">%title%</div><div class = "display-producer">%producer%</div><div class="display-yearReleased">%yearReleased%</div><div class="display-age"> %age% </div><div class = "remove-movie">X</div>'
        const currentYear = new Date().getFullYear();

    const age = currentYear - yearReleased.value;

        let newHtml = html.replace('%title%', movie.title);
        newHtml = newHtml.replace('%producer%', movie.producer);
        newHtml = newHtml.replace('%yearReleased%', movie.yearReleased); 
        newHtml = newHtml.replace('%age%', age); 
        document.querySelector(".display").insertAdjacentHTML('beforeend', newHtml); 
        console.log(age);
     }
     
        // if(userTitle.value === "") {
        //     alert('title missing') 
        // } else if (userProducer.value === "") {
        //     alert ('producer missing')      
        //     } else if (useryearReleased.value === "") {
        //         alert('NO year released')
        //     }    attempt at if/else statement 
        

    
     clearFields () {
        document.getElementById('title').value = "";
        document.getElementById('producer').value =""; 
        document.getElementById('yearReleased').value =""; 
         
     } 
    
   deleteMovie (target){
       if (target.className === "remove-movie") {
           target.parentElement.remove(); 
       }
    }
}
        

       document.getElementById('movie-form').addEventListener('submit', function(e) {
        const title = document.getElementById('title').value;
        const producer = document.getElementById('producer').value;
        const yearReleased = document.getElementById('yearReleased').value;
     
    
        const movie = new Movie(title, producer, yearReleased);


    
        const ui = new UI();
        console.log(ui);
        if(title === '' || producer === '' ||  yearReleased === '' ) {
            alert ('come on try it again'); 
        } else {
        ui.addMovieToList(movie);
        ui.clearFields();
        }

        e.preventDefault();
    });
    
    document.querySelector(".display").addEventListener("click", function(e){
        const ui = new UI();
        ui.deleteMovie(e.target);
        ui.clearFields();
        e.preventDefault();
    });







//remove something/object 

//clear fields method 



//controller combines ui and model
//eventListener handler with function 

// function eventListeners(){
//     form.addEventListener('submit', displayMovie);
//     display.addEventListener('click', removeAvenger);
    
// }

// const title = document.getElementById('title').value;
// const producer = document.getElementById('producer').value; 
// const yearReleased = document.getElementById('yearReleased').value; 

// const movie = new movie(title, producer,yearReleased); 

// const ui = new UI();

// ui.displayMovie(album);

// ui.init();

// e.preventDefault();





//get values (doc query selector)

//instantiate new class/object album with variable name 


//instantiate new UI const ui = new UI()

//call relevant methods


