//importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
//main layout
const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="main__layout">
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
