//importing aos
import AOS from 'aos';
//importing hooks
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
//importing context provider
import { NavProvider } from '../context';
//importing layout & styles
import '../styles/css/default.css';
import MainLayout from '../layouts/MainLayout';
//app
function MyApp({ Component, pageProps }) {
  //global state
  const [loading, setLoading] = useState(false);
  //router
  const router = useRouter();
  useEffect(() => {
    //Binding events
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setLoading(false));
    router.events.on('routeChangeError', () => setLoading(false));
  }, []);
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
