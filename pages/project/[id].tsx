//importing utils
import Head from 'next/head';
import ProjectHero from '../../components/ProjectHero';
//project details
const ProjectDetails = () => {
  return (
    <>
      <Head>
        <title>Achraf Dev | Web Developer | Web Designer | Freelancer</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <main className="app__container">
        <ProjectHero />
      </main>
    </>
  );
};

export default ProjectDetails;
