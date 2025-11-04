

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
    const langBtn = document.querySelector(".language-btn");
const langMenu = document.querySelector(".language-menu");
const langText = langBtn.querySelector("span");

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langMenu.classList.toggle("active");
});

langMenu.querySelectorAll("p").forEach(item => {
  item.addEventListener("click", () => {
    const selectedLang = item.getAttribute("data-lang");
    langText.textContent = selectedLang;
    langMenu.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.remove("active");
  }
});
