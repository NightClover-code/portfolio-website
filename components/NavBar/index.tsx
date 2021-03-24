//importing next utils
import Link from 'next/link';
//nav bar
const NavBar = () => {
  return (
    <nav>
      <div className="logo__container">
        <Link href="/">
          <h1>
            <span>Achraf</span>Dev.
          </h1>
        </Link>
      </div>
      <div className="nav__list">
        <ul>
          <li>About Me </li>
          <li className="portfolio__list__item">Portfolio</li>
          <li>Contact</li>
          <li>Services</li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
