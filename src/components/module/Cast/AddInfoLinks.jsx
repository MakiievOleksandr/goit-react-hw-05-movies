import { Link, useLocation } from 'react-router-dom';

const AddInfoLinks = () => {
  const location = useLocation();
  const { from } = location.state;

  return (
    <>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AddInfoLinks;
