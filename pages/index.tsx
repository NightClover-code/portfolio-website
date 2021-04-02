//importing hooks
import React, { useEffect } from 'react';
//importing aos
import AOS from 'aos';
//importing next utils
import Head from 'next/head';
//importing components
import Hero from '../components/Hero';
import Porfolio from '../components/Porfolio';
import Advantages from '../components/Advantages';
import Skills from '../components/Skills';
import Socials from '../components/Socials';
import Services from '../components/Services';
//importing types
import { isNavHiddenState } from '../interfaces';
//homepage
const Homepage: React.FC<isNavHiddenState> = ({
  isNavHidden,
  setIsNavHidden,
}) => {
  //initializing aos
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);
  //hiding nav for big screens
  useEffect(() => {
    window.addEventListener('resize', (e: any) => {
      if (e.target.innerWidth > 800) {
        setIsNavHidden(true);
      }
    });
  }, []);
  //disabling scroll when nav open
  useEffect(() => {
    if (!isNavHidden) {
      document.body.classList.add('disable__scroll');
    } else {
      document.body.classList.remove('disable__scroll');
    }
  }, [isNavHidden]);
  return (
    <>
      <Head>
        <title>Achraf Dev | Web Developer | Web Designer | Freelancer</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <main className="app__container">
        <Hero isNavHidden={isNavHidden} setIsNavHidden={setIsNavHidden} />
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
