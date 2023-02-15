import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from './module/Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviePage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import Cast from './module/Cast/Cast';
import Reviews from './module/Reviews/Reviews';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
