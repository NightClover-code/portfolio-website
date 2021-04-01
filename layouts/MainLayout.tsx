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
  return (
    <div className={`main__layout `}>
      <Header isNavHidden={isNavHidden} setIsNavHidden={setIsNavHidden} />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
