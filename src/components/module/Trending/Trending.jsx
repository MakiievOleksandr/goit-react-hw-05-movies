import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPopularMovie } from 'components/shared/services/movies-api';

import scss from './trending.module.scss';

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const query = 'popular';
      try {
        const { results } = await getPopularMovie(query);
        setMovies([...results]);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h2>Trending</h2>
      <ul className={scss.list}>
        {movies.map(({ id, title }) => (
          <li className={scss.item} key={id}>
            <Link className={scss.link} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Trending;
