// let movies = document.getElementById('search-movie');
let movie;
const batman = document.getElementById('batman')
const wonderWoman = document.getElementById('wonder-woman');
const superMan = document.getElementById('super-man');
const searchMovie = document.getElementById('buscar');
const draw = document.getElementById('draw');
// searchMovie.addEventListener('click', event => {
//   movie = movies.value;
//   getMovie(movie);
// });

batman.addEventListener('click', event => {
  movie = batman.value;
  getMovie(movie);
  // draw = `<div>${drawMovie()}</div>`
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
  let info;
  for (let i = 0; i < getInfo.length; i++) {
    info = getInfo[i];
    console.log(info);
    
      // draw.innerHTML = `<img src="${info.poster}">`;
    }
};