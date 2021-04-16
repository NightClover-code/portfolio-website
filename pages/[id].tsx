//importing utils
import { portfolioAPI, projectsInfo } from '../utils';
//impoting aos animations
import 'aos/dist/aos.css';
//importing components
import ProjectHero from '../components/ProjectHero';
import ProjectSkills from '../components/ProjectSkills';
import SEO from '../components/SEO';
//importing types
import { GetStaticPaths, GetStaticProps } from 'next';
import { Project } from '../interfaces';
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

//getting props
export const getStaticProps: GetStaticProps = async context => {
  //fetching projects & id
  const projects = await portfolioAPI.get('/projects');
  const id = context.params?.id;

  const project = projects.data.filter((project: Project) => {
    if (project.projectID === id) return project;
    return null;
  })[0];

  return {
    props: {
      project,
    },
  };
};

//getting paths
export const getStaticPaths: GetStaticPaths = async () => {
  //fetching projects
  const projects = await portfolioAPI.get('/projects');

  const paths = projects.data.map((project: Project) => ({
    params: { id: project.projectID },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectDetails;
