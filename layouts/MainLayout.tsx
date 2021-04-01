//importing hooks
import { useState } from 'react';
//importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
//main layout
const MainLayout: React.FC = ({ children }) => {
  //global state
  const [isNavHidden, setIsNavHidden] = useState(false);
  return (
    <div className="main__layout">
      <Header isNavHidden={isNavHidden} setIsNavHidden={setIsNavHidden} />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
