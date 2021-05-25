//importing hooks & context
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NavContext } from '../context';
//importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
//main layout
const MainLayout: React.FC = ({ children }) => {
  //global state
  const { isLoading, setIsLoading } = useContext(NavContext);
  //router
  const router = useRouter();
  //Binding events
  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true));
    router.events.on('routeChangeComplete', () => setIsLoading(false));
    router.events.on('routeChangeError', () => setIsLoading(false));
  }, []);
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
      {isLoading ? <Loading /> : <div className="wrapper">{children}</div>}
      <Footer />
    </div>
  );
};

export default MainLayout;
