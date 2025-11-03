
const row = document.querySelector("#movies")
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
fetch("https://api.tvmaze.com/shows")
    .then(response => response.json())
    .then(movies => {
      const row = document.querySelector("#movies");

fetch("https://api.tvmaze.com/shows")
  .then(response => response.json())
  .then(movies => {
    movies.forEach(movie => {
      row.innerHTML += `
        <div class="card">
          <img src="${movie.image.medium}" class="card-img-top" alt="${movie.name}">
          <div class="card-body">
            <h5 class="card-title">${movie.name}</h5>
            <p class="card-text">${movie.rating.average ?? "N/A"}</p>
            <a href="details.html?id=${movie.id}" class="btn btn-primary">Go to details</a>
          </div>
        </div>
      `;
    });
  });

    })

    rightBtn.addEventListener("click", () => {
  row.scrollBy({ left: 400, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  row.scrollBy({ left: -400, behavior: "smooth" });
});

    const myCarousel = document.querySelector('#exxenSlider');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  ride: 'carousel'
});
