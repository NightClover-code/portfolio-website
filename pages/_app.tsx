//importing aos
import AOS from 'aos';
//importing hooks
import { useEffect } from 'react';
//importing context provider
import { NavProvider } from '../context';
//importing layout & styles & types
import '../styles/css/default.css';
import MainLayout from '../layouts/MainLayout';
import {AppProps} from 'next/app';
//app
function MyApp({ Component, pageProps }: AppProps) {
  //initializing aos
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);
  return (
    <NavProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NavProvider>
  );
}

export default MyApp;
