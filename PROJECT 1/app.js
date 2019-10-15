// PROJECT 

//one class to create the object person, album, movie ****Model
//take arguments 

const movie = [];

class Movie {
    constructor(title, producer, yearReleased) {
        this.title = title;
        this.producer = producer;
        this.yearReleased = yearReleased;
    }
}


//***View */ Class for the UI which contains methods 
//creates/insert the html for the UI DISPLAYS

class movieUI {
    //three methods, delete, clear, and push
     displayMovie(e) {
          
        let html = ' <div class="display-movie"><div class="display-title">%album%</div><div class = "display-producer">%producer%</div><div class="display-yearReleased">%yearReleased%</div></div>'
    
        let newHtml = html.replace('%title%', userTitle.value);
        newHtml = newHtml.replace('%producer%', userProducer.value);
        newHtml = newHtml.replace('%yearReleased%', useryearReleased.value); 
        document.querySelector.display.insertAdjacentElement('beforeend', newHtml)
    
        e.preventDefault(); 
    }
    
     removeMovie(e) {
        if(e.target.parentElement.classList.contains('remove-movie')){
            e.target.parentElement.parentElement.remove();
            console.log(e.target.parentElement);
        }
    
    init() {
        userTitle.value = '';
        userProducer.value = '';
        useryearReleased.value = '';
    }

    init(); 


//remove something/object 

//clear fields method 



//controller combines ui and model
//eventListener handler with function 
document.

function eventListeners(){
    form.addEventListener('submit', displayAvengerMember);
    display.addEventListener('click', removeAvenger);
    
}

const title = document.getElementById('bfhebf').value;
const artist = 

const album = new album(title, artist,url)

const ui = new UI();

ui.addAlbumToList(album);

ui.clearFields();

e.preventDefault();





//get values (doc query selector)

//instantiate new class/object album with variable name 


//instantiate new UI const ui = new UI()

//call relevant methods




//seperate event handler for removing/deleting 