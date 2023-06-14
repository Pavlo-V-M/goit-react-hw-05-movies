const api_Key =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmIwZjA2NDE5YzM3N2Y5MjU1OGEyMjM2Mjc0MTQ5NSIsInN1YiI6IjYxZTZiZjI3YjdhYmI1MDAxYTI1MWZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.StYavZ4LzGmhemX6cHksaIzE34BKhIiazMjEt5zPnEE';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${api_Key}`,
  },
};
export const getMovieCast = async id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  )
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.error(err));
};