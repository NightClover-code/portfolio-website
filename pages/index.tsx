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
import { useEffect } from 'react';
//homepage
const Homepage = () => {
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
