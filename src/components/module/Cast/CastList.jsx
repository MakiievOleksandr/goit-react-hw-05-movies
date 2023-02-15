import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getImagesSettings } from 'components/shared/services/movies-api';

const CastList = ({ credits }) => {
  const [profile, setProfile] = useState({});
  const { base_url, profile_sizes } = profile;

  useEffect(() => {
    const fetchImageSettings = async () => {
      try {
        const { images } = await getImagesSettings();
        setProfile(images);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    fetchImageSettings();
  }, []);

  const size = () => {
    if (!profile_sizes?.length) {
      return;
    }
    return profile_sizes[1];
  };

  return credits.map(({ id, character, name, profile_path }) => (
    <li key={id}>
      <img src={`${base_url}${size()}${profile_path}`} alt={name} />
      <h4>{name}</h4>
      <p>Character: {character}</p>
    </li>
  ));
};
export default CastList;

CastList.propTypes = {
  credits: PropTypes.array.isRequired,
};
