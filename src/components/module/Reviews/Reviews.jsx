import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ReviewList from './ReviewList';

import { getReviews } from 'components/shared/services/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
 
    const fetchReview = async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchReview();
  }, [movieId]);

  return (
    <div>
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
