import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./module/Header/Header'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviePage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./module/Cast/Cast'));
const Reviews = lazy(() => import('./module/Reviews/Reviews'));

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<p>...Loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
