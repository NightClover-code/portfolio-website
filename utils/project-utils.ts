import { OtherProject } from '../interfaces';
//projects info
export const projectsInfo: OtherProject[] = (() => [
  {
    id: 'coding-environment',
    image: {
      src: 'code-env.jpg',
      alt: 'coding-environement',
    },
    name: 'Coding Environment',
    title: 'Web Coding Environment',
    description:
      'This is an interactive coding environment. You can write Javascript, see it compiled, and write comprehensive documentation / notes using a Markdown Editor. This project uses a CLI to start a local express API that serves the react app. Visit this link to try it!',
    github: 'web-coding-env',
    website: '',
    skills: [
      {
        title: 'Typescript',
        logo: 'logo-ts.svg',
        alt: 'Typescript',
        span: false,
      },
      { title: 'React', logo: 'logo-react.svg', alt: 'ReactJS', span: true },
      { title: 'Redux', logo: 'logo-redux.svg', alt: 'ReduxJS', span: false },
      {
        title: 'Responsive CSS3',
        logo: 'logo-css.svg',
        alt: 'CSS3',
        span: true,
      },
      { title: 'Node', logo: 'logo-node.svg', alt: 'NodeJS', span: true },
      {
        title: 'Express',
        logo: '',
        alt: 'ExpressJS',
        span: false,
      },
      { title: 'CLI', logo: 'logo-cli.svg', alt: 'CLI', span: true },
      { title: 'Lerna', logo: '', alt: 'Lerna', span: false },
    ],
  },
  {
    id: 'rest-api',
    image: {
      src: 'rest-home-dark.jpg',
      alt: 'rest-countries-api',
    },
    name: 'Rest API',
    title: 'Rest API Web App',
    description:
      'This is a project that uses the Rest Countries API to pull country data and display it like in the design. Users can search for specific countries, filter them by region, toggle between light and dark mode and much more!',
    github: 'rest-countries-api',
    website: 'https://rest-countries-api-nightclover-code.vercel.app/',
    skills: [
      {
        title: 'Typescript',
        logo: 'logo-ts.svg',
        alt: 'Typescript',
        span: false,
      },
      { title: 'React', logo: 'logo-react.svg', alt: 'ReactJS', span: true },
      { title: 'Redux', logo: 'logo-redux.svg', alt: 'ReduxJS', span: false },
      { title: 'Sass', logo: 'logo-sass.svg', alt: 'Sass', span: false },
      { title: 'git', logo: 'logo-git.svg', alt: 'git', span: true },
      {
        title: 'github',
        logo: 'logo-github-skills.svg',
        alt: 'github',
        span: false,
      },
    ],
  },
  {
    id: 'url-shortener',
    name: 'Url Shortener',
    image: {
      src: 'url-shortener.jpg',
      alt: 'url-shortener',
    },
    title: 'Shortly - Url Shortener Website',
    description:
      'This is an url shortener landing page, it uses the shrtcode API to shorten any valid links provided by users. Users can also create an account or login with popular authentification providers (such as google) to save the links they shortened to their account.',
    github: 'url-shortener',
    website: 'https://url-shortener-git-main-nightclover-code.vercel.app/',
    skills: [
      {
        title: 'Modern Javascript',
        logo: 'logo-js.svg',
        alt: 'Javascript',
        span: false,
      },
      { title: 'React', logo: 'logo-react.svg', alt: 'ReactJS', span: true },
      { title: 'Redux', logo: 'logo-redux.svg', alt: 'ReduxJS', span: false },
      { title: 'Sass', logo: 'logo-sass.svg', alt: 'Sass', span: false },
      { title: 'git', logo: 'logo-git.svg', alt: 'git', span: false },
      {
        title: 'github',
        logo: 'logo-github-skills.svg',
        alt: 'github',
        span: false,
      },
      {
        title: 'Firebase',
        logo: 'logo-firebase.svg',
        alt: 'Firebase',
        span: false,
      },
    ],
  },
  {
    id: 'newsly',
    name: 'Newsly',
    image: {
      src: 'newsly.jpg',
      alt: 'newsly',
      objectPosition: '0 0',
    },
    title: 'Newsly - News Website',
    description:
      "This is a project that uses the News API to display the latest news around the globe. I've designed it with figma and built it with ReactJS. Users can choose specific categories such as sports or science, and they can also read trending and detailed articles. This project is not finished, more functionality is yet to come.",
    github: 'newsly',
    website: 'https://newsly-nightclover-code.vercel.app/',
    skills: [
      {
        title: 'Typescript',
        logo: 'logo-ts.svg',
        alt: 'Typescript',
        span: false,
      },
      { title: 'React', logo: 'logo-react.svg', alt: 'ReactJS', span: true },
      { title: 'Sass', logo: 'logo-sass.svg', alt: 'Sass', span: false },
      { title: 'git', logo: 'logo-git.svg', alt: 'git', span: false },
      {
        title: 'github',
        logo: 'logo-github-skills.svg',
        alt: 'github',
        span: true,
      },
      { title: 'Figma', logo: 'logo-figma.svg', alt: 'Figma', span: false },
    ],
  },
  {
    id: 'bookmark',
    name: 'Bookmark',
    image: {
      src: 'bookmark.jpg',
      alt: 'bookmark',
    },
    title: 'Bookmark - Extensions Manager Website',
    description:
      'This is a simple bookmarking manager landing page, it has an FAQ section with a functional accordion component and some newsletter email validation. As a bonus, beautiful animations were implemented as well.',
    github: 'bookmark',
    website: 'https://bookmark-git-master-nightclover-code.vercel.app/',
    skills: [
      {
        title: 'Typescript',
        logo: 'logo-ts.svg',
        alt: 'Typescript',
        span: false,
      },
      { title: 'React', logo: 'logo-react.svg', alt: 'ReactJS', span: true },
      { title: 'Sass', logo: 'logo-sass.svg', alt: 'Sass', span: false },
      { title: 'git', logo: 'logo-git.svg', alt: 'git', span: true },
      {
        title: 'github',
        logo: 'logo-github-skills.svg',
        alt: 'github',
        span: true,
      },
    ],
  },
  {
    id: 'todo-app',
    name: 'Todo App',
    image: {
      src: 'todo-app-dark.jpg',
      alt: 'todo-app',
      objectPosition: '45% 0%',
    },
    title: 'TODO - Todo Web App',
    description:
      'This is my first React project, it is a responsive todo app with drag & drop functionality. Users can add new todos, mark them as completed, filter them by all/completed/active and toggle between light and dark mode. As a bonus, you can also classify them by importance using drag & drop.',
    github: 'todo-app',
    website: 'https://stoic-wiles-03feb7.netlify.app/',
    skills: [
      {
        title: 'Modern Javascript',
        logo: 'logo-js.svg',
        alt: 'Javascript',
        span: false,
      },
      { title: 'React', logo: 'logo-react.svg', alt: 'ReactJS', span: true },
      { title: 'Sass', logo: 'logo-sass.svg', alt: 'Sass', span: false },
      { title: 'git', logo: 'logo-git.svg', alt: 'git', span: true },
      {
        title: 'github',
        logo: 'logo-github-skills.svg',
        alt: 'github',
        span: true,
      },
    ],
  },
  {
    id: 'room',
    name: 'Room Homepage',
    image: {
      src: 'room-slide-1.jpg',
      alt: 'room',
    },
    title: 'Room - eCommerce Homepage',
    description:
      'This is an eCommerce homepage, built with ReactJS and Scss for styling. The challenge was to add the slider that switches between products, and also implementing smooth animations.',
    github: 'room-homepage-ecommerce',
    website:
      'https://room-homepage-ecommerce-git-master-nightclover-code.vercel.app/',
    skills: [
      {
        title: 'Modern Javascript',
        logo: 'logo-js.svg',
        alt: 'Javascript',
        span: false,
      },
      { title: 'React', logo: 'logo-react.svg', alt: 'ReactJS', span: true },
      { title: 'Sass', logo: 'logo-sass.svg', alt: 'Sass', span: false },
      { title: 'git', logo: 'logo-git.svg', alt: 'git', span: true },
      {
        title: 'github',
        logo: 'logo-github-skills.svg',
        alt: 'github',
        span: true,
      },
    ],
  },
  {
    id: 'chat-app',
    name: 'Chat App',
    image: {
      src: 'chat-app.jpg',
      alt: 'chat-app',
      objectPosition: '35% 0%',
    },
    title: 'Simple Booking - Chat App Illustration',
    description:
      'This is a chat app illustration built with HTML and Scss. The challenge was to build out a phone component including text messages, all using just plain CSS!',
    github: 'css-illustration',
    website: 'http://css-illustration-git-master.nightclover-code.vercel.app/',
    skills: [
      {
        title: 'Semantic HTML5',
        logo: 'logo-html.svg',
        alt: 'HTML5',
        span: true,
      },
      { title: 'Sass', logo: 'logo-sass.svg', alt: 'Sass', span: true },
      { title: 'git', logo: 'logo-git.svg', alt: 'git', span: true },
      {
        title: 'github',
        logo: 'logo-github-skills.svg',
        alt: 'github',
        span: true,
      },
    ],
  },
])();
