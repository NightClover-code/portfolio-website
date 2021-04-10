//importing utils
import { projectsInfo } from '../utils';
//impoting aos animations
import 'aos/dist/aos.css';
//importing components
import ProjectHero from '../components/ProjectHero';
import ProjectSkills from '../components/ProjectSkills';
import SEO from '../components/SEO';
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
  })[0];

  return {
    props: {
      project,
    },
  };
};
//props interface
interface ProjectDetailsProps {
  project: Project;
}
//project details
const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  //config
  const projectConfig = {
    project,
  };
  const seoConfig = {
    title: `Achraf Dev | Project | ${project.name}`,
    description: project.description,
    keywords: `Projects, Portfolio, Skills, Technologies, eCommerce website, ${project.name}-project, React, Redux, Javascript, HTML, CSS, Achraf Dev, Web Design , Web Development, SEO, Typescript`,
  };
  return (
    <>
      <SEO {...seoConfig} />
      <main className="app__container">
        <ProjectHero {...projectConfig} />
        <ProjectSkills {...projectConfig} />
      </main>
    </>
  );
};

export default ProjectDetails;
