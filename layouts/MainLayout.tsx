//importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
//main layout
const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
