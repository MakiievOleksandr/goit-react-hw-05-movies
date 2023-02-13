import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '2fc9cddb581d13f9fbb06828f41e996e',
    page: 1,
  },
});

export const getPopularMovie = async query => {
  const { data } = await instance.get(`/movie/${query}`);
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};
export const getImagesSettings = async () => {
  const { data } = await instance.get(`/configuration`);
  return data;
};
export const getMovieCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};
export const getMovies = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query: query,
    },
  });
  return data;
};

export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
