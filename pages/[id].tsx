//importing utils
import Head from 'next/head';
import ProjectHero from '../components/ProjectHero';
import ProjectSkills from '../components/ProjectSkills';
//project details
const ProjectDetails = () => {
  return (
    <>
      <Head>
        <title>Achraf Dev | Project | </title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <main className="app__container">
        <ProjectHero />
        <ProjectSkills />
      </main>
    </>
  );
};

export default ProjectDetails;
