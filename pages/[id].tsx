//importing utils
import { portfolioAPI } from '../utils';
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
//getting props
export const getStaticProps: GetStaticProps = async context => {
  //fetching projects & id
  const id = context.params?.id;

  const project = await portfolioAPI.get(`/projects/${id}`);
  return {
    props: {
      project,
    },
  };
};

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
