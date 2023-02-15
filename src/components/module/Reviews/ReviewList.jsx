import PropTypes from 'prop-types';

const ReviewList = ({ reviews }) => {
  return reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  ));
};

export default ReviewList;

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
