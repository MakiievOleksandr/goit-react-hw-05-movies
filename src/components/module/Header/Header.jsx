import { NavLink } from 'react-router-dom';

import scss from './header.module.scss';

const Header = () => {
  return (
    <header className={scss.header}>
      <ul className={scss.list}>
        <li>
          <NavLink to="/" className={scss.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={scss.link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
