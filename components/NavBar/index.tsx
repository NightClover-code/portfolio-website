//importing hooks & context
import { useContext, useRef } from 'react';
import { useRouter } from 'next/router';
import { NavContext } from '../../context';
//importing next utils
import Link from 'next/link';
import { disableLinks } from '../../utils';
//importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//importing jump
import jump from 'jump.js';
//nav bar
const NavBar = () => {
  //refs
  const listItemsRef = useRef<HTMLUListElement>(null);
  //context api state & router
  const { isNavHidden, setIsNavHidden } = useContext(NavContext);
  const router = useRouter();
  //on toggle nav
  const onToggleNav = () => {
    setIsNavHidden(!isNavHidden);
  };
  //on list click handler
  const onListClickHandler = () => {
    disableLinks(listItemsRef.current);
  };
  //on nav link click handler
  const onNavLinkClickHandler = (
    className: string,
    duration: number,
    offset?: number
  ) => {
    if (router.query.id) {
      router.push('/');
      setTimeout(() => {
        jump(className, {
          duration,
          offset,
        });
      }, 100);
    } else {
      jump(className, {
        duration,
        offset,
      });
    }
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
          <li onClick={() => onNavLinkClickHandler('.footer', 1200)}>
            Get In Touch
          </li>
          <Link href="/about">
            <li>About Me</li>
          </Link>
          <li
            className="portfolio__list__item"
            onClick={() =>
              onNavLinkClickHandler('.portfolio__section', 1200, -140)
            }
          >
            Portfolio
          </li>
          <li onClick={() => onNavLinkClickHandler('.skills__section', 1200)}>
            Skills
          </li>
          <li
            onClick={() =>
              onNavLinkClickHandler('.socials__section', 1200, -80)
            }
          >
            Contact
          </li>
          <li onClick={() => onNavLinkClickHandler('.services__section', 1200)}>
            Services
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
