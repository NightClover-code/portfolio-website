//importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
import { isNavHiddenState } from '../interfaces';
//main layout
const MainLayout: React.FC<isNavHiddenState> = ({
  children,
  isNavHidden,
  setIsNavHidden,
}) => {
  //on click handler
  const onClickHandler = (e: any) => {
    if (
      !isNavHidden &&
      e.target.tagName !== 'DIV' &&
      e.target.tagName !== 'UL'
    ) {
      setIsNavHidden(true);
    }
  };
  return (
    <div className="main__layout" onClick={onClickHandler}>
      <Header isNavHidden={isNavHidden} setIsNavHidden={setIsNavHidden} />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
