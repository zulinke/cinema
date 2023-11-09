const movies = [
  { name: "Jumper", image: "https://media.fstatic.com/LJ-shE9CDi1s6gooTzKVi7dUDRQ=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/aeb058c79ff1537bdef1f74c285eec8f.jpg", tickets: 90, category: "Terror" },
  { name: "O Poderoso Chefão", image: "https://play-lh.googleusercontent.com/ooMpCgZK3ftSd8b5z8pob30iilVw2sUf6V9DQoWPRd4UlvWhT-PJIJMgJEojH3WjTXt4srbfzUuEYu72J-Q", tickets: 80, category: "Comédia" },
  { name: "O Silêncio dos Inocentes", image: "https://upload.wikimedia.org/wikipedia/pt/0/0a/Silence_of_the_lambs.png", tickets: 135, category: "Comédia" },
  { name: "Inception", image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg", tickets: 70, category: "Comédia" },
  { name: "The Shawshank Redemption", image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg", tickets: 65, category: "Comédia" },
  { name: "The Dark Knight (BATMAN)", image: "https://a-static.mlcdn.com.br/450x450/poster-cartaz-batman-o-cavaleiro-das-trevas-k-pop-arte-poster/poparteskins2/15938524864/0e26ba4969bb33168af26b114417e1c8.jpeg", tickets: 75, category: "Comédia" },
  { name: "Os Banshees de Inisherin", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8bE_cFMGYzrBRNWx2xmgLT5Lam11Ram_wUIo_xJFcyxRXWxrL", tickets: 100, category: "Terror" },
  { name: "The Outfit", image: "https://play-lh.googleusercontent.com/xs8OoP8VTF6OHAwkNiYLuIhkQPCZoVxsOcJoqK6YhtL_bXIV4I8b1yXyQU2Zm7mdoMIWLjpypmRl_Kn1n4gM", tickets: 120, category: "Terror" },
  { name: "Crimes do Futuro", image: "https://br.web.img3.acsta.net/pictures/22/07/14/17/04/4863334.jpg", tickets: 95, category: "Terror" },
  { name: "Aftersun", image: "https://upload.wikimedia.org/wikipedia/pt/1/11/Aftersun.jpg", tickets: 125, category: "Terror" },
  { name: "The Exorcist", image: "https://m.media-amazon.com/images/M/MV5BYWFlZGY2NDktY2ZjOS00ZWNkLTg0ZDAtZDY4MTM1ODU4ZjljXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg", tickets: 70, category: "Terror" },
  { name: "Psycho", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/250px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg", tickets: 95, category: "Terror" },
  { name: "A Nightmare on Elm Street", image: "https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg", tickets: 90, category: "Terror" },
  { name: "The Shining", image: "https://play-lh.googleusercontent.com/S1XWe0sjivVpNf9lZB5V7aF5xfwWNr5gJ5f_HyENQNz55_JeA_pqHeYmYJyAw9qdYGmy", tickets: 110, category: "Terror" },
  { name: "Forrest Gump", image: "https://m.media-amazon.com/images/I/61n1C7g7WNL._AC_UF1000,1000_QL80_.jpg", tickets: 120, category: "Romance" },
  { name: "Titanic", image: "https://m.media-amazon.com/images/S/pv-target-images/4721ec145e5bca07fe6a3719a290d053de2c245f26eda14be1ac25ed8476017f.jpg", tickets: 80, category: "Romance" },
  { name: "The Notebook", image: "https://m.media-amazon.com/images/M/MV5BNzc3Mzg1OGYtZjc3My00Y2NhLTgyOWUtYjRhMmI4OTkwNDg4XkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_.jpg", tickets: 150, category: "Romance" },
  { name: "Pride and Prejudice", image: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg", tickets: 110, category: "Romance" },
  { name: "Eternal Sunshine of the Spotless Mind", image: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg", tickets: 105, category: "Romance" },
  { name: "Casablanca", image: "https://br.web.img3.acsta.net/medias/nmedia/18/91/00/67/20124690.jpg", tickets: 85, category: "Romance" },
];

const perPage = 10;
let currentPage = 1;

const moviesList = document.getElementById("movies-list");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category-filter");
const pagination = document.getElementById("pagination");

function displayMovies() {
  moviesList.innerHTML = "";

  const filteredMovies = movies.filter(movie => {
      const searchTerm = searchInput.value.toLowerCase();
      const category = categoryFilter.value;

      return (movie.name.toLowerCase().includes(searchTerm) && (category === "" || movie.category === category));
  });

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  paginatedMovies.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("movie-card");
      card.innerHTML = `
          <img src="${movie.image}" alt="${movie.name}">
          <h2>${movie.name}</h2>
          <p>Disponíveis: ${movie.tickets} tickets</p>
          <p>Categoria: ${movie.category}</p>
      `;
      moviesList.appendChild(card);
  });

  displayPagination(filteredMovies.length);
}

function displayPagination(totalMovies) {
  const totalPages = Math.ceil(totalMovies / perPage);

  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.classList.add("pagination-button");
      button.textContent = i;

      if (i === currentPage) {
          button.classList.add("active");
      }

      button.addEventListener("click", () => {
          currentPage = i;
          displayMovies();
      });

      pagination.appendChild(button);
  }
}

searchInput.addEventListener("input", displayMovies);
categoryFilter.addEventListener("change", displayMovies);

displayMovies();