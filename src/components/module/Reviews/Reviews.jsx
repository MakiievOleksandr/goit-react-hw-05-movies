import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ReviewList from './ReviewList';

import { getReviews } from 'components/shared/services/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!reviews) {
      return;
    }
    const fetchReview = async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchReview();
  }, [movieId, reviews]);

  const handleBack = evt => {
    navigate(-1);
  };

  return (
    <div>
      <button type="button" onClick={handleBack}>
        Go back
      </button>
      <h2>Reviews</h2>
      <ul>
        {reviews?.length > 0 ? (
          <ReviewList reviews={reviews} />
        ) : (
          <p>We don't have any review about this movie</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
