import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CastList from './CastList';

import { getMovieCast } from 'components/shared/services/movies-api';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { cast } = await getMovieCast(movieId);
        setCredits(cast.splice(0, 9));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieCast();
  }, [movieId]); //dependencies

  return (
    <div>
      <h1>CAST</h1>
      <ul>
        <CastList credits={credits} />
      </ul>
    </div>
  );
};
export default Cast;
