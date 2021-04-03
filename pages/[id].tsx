//importing utils
import Head from 'next/head';
import { projectsInfo } from '../utils';
//impoting aos animations
import 'aos/dist/aos.css';
//importing components
import ProjectHero from '../components/ProjectHero';
import ProjectSkills from '../components/ProjectSkills';
//importing types
import { GetStaticPaths, GetStaticProps } from 'next';
import { Project } from '../interfaces';
//getting paths
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsInfo.map(project => ({
    params: { id: project.id },
  }));

  return {
    paths,
    fallback: false,
  };
};
//getting props
export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id;

  const project = projectsInfo.filter(project => {
    if (project.id === id) return project;
    return null;
  });

  return {
    props: {
      project: project[0],
    },
  };
};
//props interface
interface ProjectDetailsProps {
  project: Project;
}
//project details
const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>Achraf Dev | Project | </title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <main className="app__container">
        <ProjectHero project={project} />
        <ProjectSkills project={project} />
      </main>
    </>
  );
};

export default ProjectDetails;
