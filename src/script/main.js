import './component/search-bar.js';

function main() {
  const searchFilm = async (inputText) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${inputText}&apikey=a9743a78`
      );
      const responseJson = await response.json();
      showFilm(responseJson.Search);
    } catch (err) {
      console.log(err);
    }
  };

  const showFilm = (movies) => {
    const container = document.querySelector('.films');
    container.innerHTML = '';

    movies.forEach((movie) => {
      const film = document.createElement('div');
      film.className = 'card col-md-3 px-2 my-3';
      film.innerHTML = `
      <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <p class="card-text">${movie.Year}</p>
        <a href="#" class="btn btn-primary">detail</a>
      </div>
    `;
      container.appendChild(film);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    const searchElement = document.querySelector('search-bar');
    const onButtonSearchClicked = () => {
      searchFilm(searchElement.value);
    };

    searchElement.clickEvent = onButtonSearchClicked;
  });
}
export default main;
