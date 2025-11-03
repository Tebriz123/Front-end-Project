



const body = document.querySelector("body")
const id = window.location.search.slice(4)
fetch(`https://api.tvmaze.com/shows/${id}`)
    .then(response => response.json())
    .then(movie => {
        body.innerHTML += `
    <h1>${movie.name}</h1>
           <img src="${movie.image.medium}" alt="${movie.name}">
         <p>${movie.summary}</p>
             <p>${movie.genres}</p>
    `
    })