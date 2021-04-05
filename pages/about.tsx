//importing utils
import Head from 'next/head';
//importing components
import About from '../components/About';
//about page
const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Achraf Dev | About Me</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="description" content="" />
        {/*TODO add keywords & description*/}
        <meta name="author" content="Achraf Dev" />
        <meta name="keywords" content="" />
      </Head>
      <div className="app__container">
        <About />
      </div>
    </>
  );
};

export default AboutPage;
