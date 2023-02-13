import { NavLink } from 'react-router-dom';

const AddInfoLinks = () => {
  return (
    <>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AddInfoLinks;
