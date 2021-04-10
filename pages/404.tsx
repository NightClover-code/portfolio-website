//importing utils
import Head from 'next/head';
//importing animations
import 'aos/dist/aos.css';
import NotFoundCard from '../components/NotFound';
//404 page
const NotFound = () => {
  return (
    <>
      <Head>
        <title>Achraf Dev | Not Found</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="We couldn't find the page you're looking for. Please check you
                spelled the url correctly and if there wasn't any network
                issues."
        />
        <meta name="author" content="Achraf Dev" />
        <meta
          name="google-site-verification"
          content="7AMm0qMOoYISNP_Pg3TIOE8o8E_DVYgk829hyLoBA_I"
        />
      </Head>
      <NotFoundCard />
    </>
  );
};

export default NotFound;
