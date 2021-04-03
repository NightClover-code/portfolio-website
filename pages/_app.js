//importing aos
import AOS from 'aos';
//importing hooks
import { useState, useEffect } from 'react';
//importing context provider
import { NavProvider } from '../context';
//importing layout & styles
import '../styles/css/default.css';
import MainLayout from '../layouts/MainLayout';
//app
function MyApp({ Component, pageProps }) {
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
