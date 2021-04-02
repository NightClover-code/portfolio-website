//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../context';
//importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
//main layout
const MainLayout: React.FC = ({ children }) => {
  //context api state
  const { isNavHidden, setIsNavHidden } = useContext(NavContext);
  //on click handler
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.target as HTMLInputElement;
    if (!isNavHidden && el.tagName !== 'DIV' && el.tagName !== 'UL') {
      setIsNavHidden(true);
    }
  };
  return (
    <div className="main__layout" onClick={onClickHandler}>
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
