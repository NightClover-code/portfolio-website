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
        <link rel="shortcut icon" href="/images/favicon.ico" />
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
