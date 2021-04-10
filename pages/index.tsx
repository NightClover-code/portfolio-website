//importing hooks
import { useEffect, useContext } from 'react';
//importing utils
import Head from 'next/head';
import { disableScroll, hideNav } from '../utils';
//importing components
import Hero from '../components/Hero';
import Porfolio from '../components/Porfolio';
import Advantages from '../components/Advantages';
import Skills from '../components/Skills';
import Socials from '../components/Socials';
import Services from '../components/Services';
//importing context
import { NavContext } from '../context';
//homepage
const Homepage = () => {
  //context api state
  const { setIsNavHidden, isNavHidden } = useContext(NavContext);
  //hiding nav for big screens
  useEffect(() => {
    hideNav(setIsNavHidden);
  }, []);
  //disabling scroll when nav open
  useEffect(() => {
    disableScroll(isNavHidden);
  }, [isNavHidden]);
  return (
    <>
      <Head>
        <title>Achraf Dev | Web Developer | Web Designer | Freelancer</title>
        <link
          rel="shortcut icon"
          type="images/ico"
          href="/images/favicon.ico"
        />
        {/* better seo */}
        <meta
          name="description"
          content="Hi there, I'm Achraf, a Front End Web Developer and Web Designer. I build powerful and awesome websites using the latest web technologies for businesses around the globe. If you need a modern and powerful website, send me an email."
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="Web Designer, Web Developer, React, Redux, Javascript, Typescript, Freelancer, Design, Development, SEO, SSR, Portfolio Website, Achraf Dev, Websites, HTML, CSS"
        />
        <meta name="author" content="Achraf Dev" />
        <meta
          name="google-site-verification"
          content="7AMm0qMOoYISNP_Pg3TIOE8o8E_DVYgk829hyLoBA_I"
        />
      </Head>
      <main className="app__container">
        <Hero />
        <Porfolio />
        <Skills />
        <Socials />
        <Advantages />
        <Services />
      </main>
    </>
  );
};

export default Homepage;
