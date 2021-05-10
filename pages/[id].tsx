//importing utils
import { portfolioAPI } from '../utils';
//impoting aos animations
import 'aos/dist/aos.css';
//importing components
import ProjectHero from '../components/ProjectHero';
import ProjectSkills from '../components/ProjectSkills';
import SEO from '../components/SEO';
//importing types
import { GetStaticPaths, GetServerSideProps } from 'next';
import { ProjectType } from '../interfaces';
//props interface
interface ProjectDetailsProps {
  project: ProjectType;
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
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  //fetching projects & id
  const id = params?.id;

  const project = await portfolioAPI.get(`/projects/${id}`);
  return {
    props: {
      project: project.data,
    },
  };
};

export default ProjectDetails;
