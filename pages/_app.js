//importing hooks
import { useState } from 'react';
//importing context provider
import { NavProvider } from '../context';
//importing layout & styles
import '../styles/css/default.css';
import MainLayout from '../layouts/MainLayout';
//app
function MyApp({ Component, pageProps }) {
  //global state
  const [isNavHidden, setIsNavHidden] = useState(true);
  return (
    <NavProvider>
      <MainLayout isNavHidden={isNavHidden} setIsNavHidden={setIsNavHidden}>
        <Component
          {...pageProps}
          isNavHidden={isNavHidden}
          setIsNavHidden={setIsNavHidden}
        />
      </MainLayout>
    </NavProvider>
  );
}

export default MyApp;
