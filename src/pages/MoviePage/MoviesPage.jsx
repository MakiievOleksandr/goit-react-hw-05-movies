import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

import SearchMovieForm from 'components/module/SearchMovieForm/SearchMovieForm';

import { getMovies } from 'components/shared/services/movies-api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');
  const location = useLocation();

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
      <SearchMovieForm onSubmit={handleSubmit} />
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;

