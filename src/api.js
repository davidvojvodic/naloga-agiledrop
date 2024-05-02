const API_KEY = '27e5944c8fa4da41f3362a64acc866ff';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async (genreId) => {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};