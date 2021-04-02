//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../context';
//importing components
import NavBar from '../NavBar';
//header
const Header = () => {
  //context api state
  const { isNavHidden } = useContext(NavContext);
  return (
    <header className={`header ${!isNavHidden ? 'nav__overlay' : ''}`}>
      <div className="container">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
