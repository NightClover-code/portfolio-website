//importing components
import { isNavHiddenState } from '../../interfaces';
import NavBar from '../NavBar';
//header
const Header: React.FC<isNavHiddenState> = ({
  setIsNavHidden,
  isNavHidden,
}) => {
  return (
    <header className={`header ${!isNavHidden ? 'nav__overlay' : ''}`}>
      <div className="container">
        <NavBar isNavHidden={isNavHidden} setIsNavHidden={setIsNavHidden} />
      </div>
    </header>
  );
};

export default Header;
