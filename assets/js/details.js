

const mainDetails=document.querySelector(".movie-details")
const id = window.location.search.slice(4)
fetch(`https://api.tvmaze.com/shows/${id}`)
    .then(response => response.json())
    .then(movie => {
        mainDetails.innerHTML += `
    <h1 class="movie-name">${movie.name}</h1>
           <img src="${movie.image.original}" alt="${movie.name}">
         <p class="movie-summary">${movie.summary}</p>
             <p class="movie-genres">${movie.genres}</p>
    `  
    })