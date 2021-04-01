//importing types
import { isNavHiddenState } from '../../interfaces';
//importing next utils
import Link from 'next/link';
//importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//importing jump
import jump from 'jump.js';
//nav bar
const NavBar: React.FC<isNavHiddenState> = ({
  isNavHidden,
  setIsNavHidden,
}) => {
  //on toggle nav
  const onToggleNav = () => {
    setIsNavHidden(!isNavHidden);
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
        <ul>
          <li
            onClick={() =>
              jump('.footer', {
                duration: 1200,
              })
            }
          >
            Get In Touch{' '}
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
