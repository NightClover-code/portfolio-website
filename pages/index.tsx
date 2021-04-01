//importing hooks & context
import { useEffect } from 'react';
import { NavProvider } from '../context/GlobalContext';
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
    <NavProvider>
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
    </NavProvider>
  );
};

export default Homepage;
