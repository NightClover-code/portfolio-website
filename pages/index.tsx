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
const Homepage: React.FC<isNavHiddenState> = ({ isNavHidden }) => {
  //initializing aos
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);
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
