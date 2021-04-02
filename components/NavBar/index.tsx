//importing hooks & context
import { useContext, useRef } from 'react';
import { NavContext } from '../../context';
//importing next utils
import Link from 'next/link';
//importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//importing jump
import jump from 'jump.js';
//nav bar
const NavBar = () => {
  //refs
  const listItemsRef = useRef<HTMLUListElement>(null);
  //context api state
  const { isNavHidden, setIsNavHidden } = useContext(NavContext);
  //on toggle nav
  const onToggleNav = () => {
    setIsNavHidden(!isNavHidden);
  };
  //on list click handler
  const onListClickHandler = () => {
    setTimeout(() => {
      if (listItemsRef.current) {
        return listItemsRef.current.classList.add('disable');
      }
    }, 10);
    setTimeout(() => {
      if (listItemsRef.current) {
        return listItemsRef.current.classList.remove('disable');
      }
    }, 1000);
  };
  return (
    <nav>
      <div className="logo__container">
        <Link href="/">
          <h1>
            <span>Achraf</span>Dev.
          </h1>
        </Link>
      </div>
      <div className="menu__container" onClick={onToggleNav}>
        <FontAwesomeIcon icon={faBars} className="hamburger__icon" size="2x" />
      </div>
      <div className={`nav__list ${isNavHidden ? '' : 'active'}`}>
        <ul onClick={onListClickHandler} ref={listItemsRef}>
          <li
            onClick={() =>
              jump('.footer', {
                duration: 1200,
              })
            }
          >
            Get In Touch
          </li>
          <li
            className="portfolio__list__item"
            onClick={() =>
              jump('.portfolio__section', {
                offset: -140,
                duration: 1200,
              })
            }
          >
            Portfolio
          </li>
          <li
            onClick={() =>
              jump('.skills__section', {
                duration: 1200,
              })
            }
          >
            Skills
          </li>
          <li
            onClick={() =>
              jump('.socials__section', {
                offset: -80,
                duration: 1200,
              })
            }
          >
            Contact
          </li>
          <li
            onClick={() =>
              jump('.services__section', {
                duration: 1200,
              })
            }
          >
            Services
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
