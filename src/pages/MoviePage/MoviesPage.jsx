import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import SearchMovieForm from 'components/module/SearchMovieForm/SearchMovieForm';

import { getMovies } from 'components/shared/services/movies-api';
// import MovieDetails from 'components/module/MovieDetails/MovieDetails';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

const MoviesPage = () => {
  // const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchMovies = async () => {
      try {
        const { results } = await getMovies(search);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovies();
  }, [search]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      {/* <MovieDetailsPage /> */}
      <SearchMovieForm onSubmit={handleSubmit} />
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
