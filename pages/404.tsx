//importing utils
import Image from 'next/image';
import Head from 'next/head';
//importing animations
import 'aos/dist/aos.css';
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
      <div className="not__found">
        <div className="container">
          <div className="content">
            <div className="text__content" data-aos="fade-up">
              <h1 data-aos="fade-up">Whoops...</h1>
              <p data-aos="fade-up" data-aos-delay="400">
                We couldn't find the page you're looking for. Please check you
                spelled the url correctly and if there wasn't any network
                issues.
              </p>
            </div>
            <div
              className="illustration__container"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <Image
                src="/images/not-found.jpg"
                layout="fill"
                alt="404"
                objectFit="contain"
                objectPosition="0% 45%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
