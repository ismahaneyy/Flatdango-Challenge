// fetches  a list of movies from the db.json file
const baseUrl = "http://localhost:3000/films";
function fetchMovies(){
    fetch(baseUrl)
        .then((response) => response.json()) 
        .then((data) =>{
            data.forEach((films) =>{
// Adds the film titles to the DOM in the form of a clickable menu
              let li = document.createElement("li");
              li.textContent = films.title;
              li.addEventListener("click",
              (e)=>{let buttonContent =
                document.querySelector("button#buy-ticket")
                buttonContent.textContent = "Buy Tickets"


