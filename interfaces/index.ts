//importing types
import { setNavHiddenType } from '../types';
export interface ServicesDataInterface {
  title: string;
  description: string;
  src: string;
  alt: string;
}
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
  skills: {
    id: string;
    title: string;
    logo: string;
    span: boolean;
    alt: string;
  }[];
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
  src: string;
  alt: string;
  objectPosition: string;
  animationDelay: number;
  __v: number;
  imgSource: {
    id: string;
    name: string;
    alternativeText: string;
    caption: string;
    hash: string;
    ext: string;
    mime: string;
    size: 163.37;
    width: 1920;
    height: 1080;
    url: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
  };
}
