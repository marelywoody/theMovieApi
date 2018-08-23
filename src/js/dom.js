let movies = document.getElementById('search-movie');
let movie;
const batman = document.getElementById('batman')
const wonderWoman = document.getElementById('wonder-woman');
const superMan = document.getElementById('super-man');
const searchMovie = document.getElementById('buscar');
const draw = document.getElementById('draw');
searchMovie.addEventListener('click', event => {
  movie = movies.value;
  getMovie(movie);
});

batman.addEventListener('click', event => {
  movie = batman.value;
  getMovie(movie);
});

wonderWoman.addEventListener('click', event => {
  movie = wonderWoman.value;
  getMovie(movie);
});

superMan.addEventListener('click', event => {
  movie = superMan.value;
  getMovie(movie);
});

const drawInfo = (data) => {
  let getInfo = drawMovie(data);
  draw.innerHTML = ' ';
  getInfo.forEach((element) => {
    console.log(element.poster);
    draw.innerHTML += `<img src="${element.poster}"><p>${element.title}<br>${element.type}<br>${element.year}</p>`
  });
};