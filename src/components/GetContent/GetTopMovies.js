import axios from 'axios';
const api_Key =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmIwZjA2NDE5YzM3N2Y5MjU1OGEyMjM2Mjc0MTQ5NSIsInN1YiI6IjYxZTZiZjI3YjdhYmI1MDAxYTI1MWZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.StYavZ4LzGmhemX6cHksaIzE34BKhIiazMjEt5zPnEE';
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day?api_key=9fb0f06419c377f92558a22362741495 ',
  params: { language: 'en-US' },
  headers: { accept: 'application/json', Authorization: `Bearer ${api_Key}` },
};

export const getTopMovies = async () => {
  return axios
    .request(options)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
};