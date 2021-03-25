//importing next utils
import Head from 'next/head';
//importing components
import Hero from '../components/Hero';
import Porfolio from '../components/Porfolio';
import Skills from '../components/Skills';
//homepage
const Homepage = () => (
  <>
    <Head>
      <title>AchrafDev | Front End Developer | Web Designer</title>
    </Head>
    <main className="app__container">
      <Hero />
      <Porfolio />
      <Skills />
    </main>
  </>
);

export default Homepage;
