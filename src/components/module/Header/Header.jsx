import { NavLink } from 'react-router-dom';

import items from './items';

import scss from './header.module.scss';

const Header = () => {
  const getFullClassName = ({ isActive }) => {
    return isActive ? `${scss.link} ${scss.active}` : scss.link;
  };

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link} className={getFullClassName}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <header className={scss.header}>
      <ul className={scss.list}>{elements}</ul>
    </header>
  );
};

export default Header;
