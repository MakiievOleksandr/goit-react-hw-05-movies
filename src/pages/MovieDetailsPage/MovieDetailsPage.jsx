import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import AddInfoLinks from 'components/module/Cast/AddInfoLinks';

import {
  getMovieDetails,
  getImagesSettings,
} from 'components/shared/services/movies-api';

import scss from './movie-details.module.scss';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [image, setImage] = useState({});
  const { title, poster_path, vote_average, overview, genres } = details;
  const { base_url, poster_sizes } = image;
  const navigate = useNavigate();

  const genresString = () => {
    if (!genres?.length) {
      return;
    }
    let string = [];
    genres.map(({ name }) => string.push(name));
    return string.join(', ');
  };

  const size = () => {
    if (!poster_sizes?.length) {
      return;
    }
    return poster_sizes[3];
  };

  useEffect(() => {
    if (!details) {
      return;
    }
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setDetails(details);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    if (!image) {
      return;
    }
    const fetchImageSettings = async () => {
      try {
        const { images } = await getImagesSettings();
        setImage(images);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    fetchMovieDetails();
    fetchImageSettings();
  }, []);

  const handleBack = evt => {
    navigate(-1);
    setDetails({});
    setImage({});
  };

  return (
    <>
      <button type="button" onClick={handleBack}>
        Go back
      </button>
      <div className={scss.container}>
        {image ? (
          <img src={`${base_url}${size()}${poster_path}`} alt={title} />
        ) : (
          <h2>Not page</h2>
        )}
        <div>
          <h2 className={scss.title}>{title}</h2>
          <p className={scss.text}>
            User score: {`${vote_average?.toFixed(2) * 10}%`}
          </p>

          <h3 className={scss.subTitle}>Overiew:</h3>
          <p className={scss.text}>{overview}</p>
          <h4 className={scss.subTitle}>Genres:</h4>
          <p className={scss.text}>{genresString()}</p>
        </div>
      </div>
      <AddInfoLinks />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
