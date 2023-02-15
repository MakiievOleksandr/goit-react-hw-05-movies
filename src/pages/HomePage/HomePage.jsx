import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getPopularMovie } from 'components/shared/services/movies-api';

import scss from './home-page.module.scss';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = 'popular';

    const fetchMovies = async () => {
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
      <h2>Trends</h2>
      <ul className={scss.list}>
        {movies.map(({ id, title }) => (
          <li className={scss.item} key={id}>
            <Link
              className={scss.link}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
