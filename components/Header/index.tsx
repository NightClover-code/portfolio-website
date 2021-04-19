//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../context';
//importing components
import NavBar from '../NavBar';
//props interface
interface HeaderProps {
  loading: boolean;
}
//header
const Header: React.FC<HeaderProps> = ({ loading }) => {
  //context api state
  const { isNavHidden } = useContext(NavContext);
  return (
    <header className={`header ${!isNavHidden ? 'nav__overlay' : ''}`}>
      <div className="container">
        <NavBar loading={loading} />
      </div>
    </header>
  );
};

export default Header;
