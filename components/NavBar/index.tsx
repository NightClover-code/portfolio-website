const NavBar = () => {
  return (
    <nav>
      <div className="logo__container">
        <h1>AchrafDev.</h1>
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
