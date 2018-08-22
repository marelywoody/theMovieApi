let url;
window.getMovie = (movie) => {
  url = `http://www.omdbapi.com/?apikey=e7ca792b&s=${movie}`
  fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    drawMovie(data)
    drawInfo(data);
  })
}

window.drawMovie = (data) => {
  let arr = [];
  let poster;
  let title;
  let type;
  let year;
  let search = data['Search'];
  for (i in search) {
    let getMovies =Object.values(search[i]);
    title = getMovies[0];
    year = getMovies[1];
    type = getMovies[3];
    poster = getMovies[4];
    let obj = {
      poster: poster,
      title: title,
      type: type,
      year: year
    };
    arr.push(obj);
  }
  return arr;
};