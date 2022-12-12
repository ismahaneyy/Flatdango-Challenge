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
                let title =
                document.getElementById("movie-title");
                   title.textContent =
               films.title;
//Adds a movies poster to the DOM when the movie title is clicked
               let img =
               document.getElementById("movie-poster");
                  img.src =
               films.poster;
               //Adds a movies showtime to the DOM when the movie title is clicked
               let showTime =
               document.getElementById("showtime");
                 showTime.textContent =
               films.showtime;
               //Adds a movies runtime to the DOM when the movie title is clicked
               let runTime =
               document.getElementById("runtime");
                 runTime.textContent =
               `${films.runtime} Minutes`;
               //Adds a movies tickets to the DOM when the movie title is clicked
               let tickets =
               document.querySelector("div#ticket-counter");
                     tickets.textContent = films["capacity"] - films["tickets_sold"]
                 })
                 document.querySelector("ul#films").appendChild(li)
             })
         })
     }fetchMovies()

//Adds the first movie to the DOM to be added when the page loads
function baseMovie(){ fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
    document.querySelector("h3#movie-title").textContent = data[0]["title"]
    document.querySelector("img#movie-poster").setAttribute("src",`${data[0]["poster"]}`)
    document.querySelector("div#showtime").textContent = data[0]["showtime"]
    document.querySelector("div#runtime").textContent = `${data[0]["runtime"]} Minutes`
    document.querySelector("ul#films").firstElementChild.remove()
    document.querySelector("div#ticket-counter").textContent = data[0]["capacity"] - data[0]["tickets_sold"]
     })
     }
    baseMovie()
//Reduces the amount of tickets in the tickets counter when the buy movies button is clicked
function buyTicket(){
    let button = document.querySelector("button#buy-ticket")
    button.addEventListener("click",function(){
    let currentLi = document.querySelector("div#ticket-counter")
    let number = parseInt(currentLi.textContent)
    if(number > 0){
    currentLi.textContent = currentLi.textContent -1}
    else{document.querySelector("button#buy-ticket").textContent = "TICKETS SOLD OUT"
        
  }
    })}
  buyTicket()

