//importing layout & styles
import '../styles/css/default.css';
import MainLayout from '../layouts/MainLayout';
//app
function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
