const row = document.querySelector("#movies");
const searchInput = document.querySelector("#searchInput");

// Hər hərf yazıldıqda axtarış et
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();

  // Əgər input boşdursa, ümumi filmləri göstər
  if (query === "") {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => showMovies(data));
    return;
  }

  // Hər yazı dəyişəndə fetch et (API: TVMaze Search)
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then(res => res.json())
    .then(data => {
      const searchResults = data.map(item => item.show);
      showMovies(searchResults);
    });
});

// Filmləri göstərmək funksiyası
function showMovies(movies) {
  row.innerHTML = ""; // Köhnə nəticələri təmizlə
  movies.forEach(movie => {
    row.innerHTML += `
      <div class="col-12">
        <div class="card" style="width: 18rem;">
          <img src="${movie.image ? movie.image.medium : 'https://via.placeholder.com/210x295?text=No+Image'}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${movie.name}</h5>
            <p class="card-text">${movie.genres.join(", ")}</p>
          </div>
        </div>
      </div>
    `;
  });
}

// Səhifə açılarkən bütün filmləri göstər
fetch("https://api.tvmaze.com/search/shows?q=bitten")
  .then(res => res.json())
  .then(data => showMovies(data));
