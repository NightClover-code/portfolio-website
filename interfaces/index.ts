//importing types
import { setNavHiddenType } from '../types';
export interface isNavHiddenState {
  isNavHidden: boolean;
  setIsNavHidden: setNavHiddenType;
}
export interface Project {
  id: string;
  projectID: string;
  image: Image;
  title: string;
  name: string;
  description: string;
  github: string;
  website: string;
  skills: Skill[];
}
export interface OtherProject {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  name: string;
  description: string;
  github: string;
  website: string;
  skills: {
    // id: string;
    title: string;
    logo: string;
  }[];
}

export interface Image {
  id: string;
  imageID: string;
  alt: string;
  objectPosition: string;
  animationDelay: number;
  image: ImageType;
}

export interface ImageType {
  id: string;
  name: string;
  url: string;
}

export interface Hero {
  title: string;
  description: string;
  image: ImageType;
}

export interface Advantage {
  title: string;
  description: string;
  alt: string;
  image: ImageType;
  animationDelay: number;
}

export interface Service {
  title: string;
  description: string;
  alt: string;
  image: ImageType;
}

export interface Skill {
  title: string;
  alt: string;
  span: boolean;
  normalLogo: ImageType;
  invertedLogo: ImageType;
}
